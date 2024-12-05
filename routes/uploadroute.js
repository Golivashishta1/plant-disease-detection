const express = require("express");
const router = express.Router();
const multer = require("multer");
const axios = require("axios");
const path = require("path");
const fs = require("fs"); // Import fs for reading files
const FormData = require("form-data");
const { authreq } = require("../controllers/authcontrol");
const { getCityName } = require("../geolocation");
const imagesdb = require("../models/imageschema");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// Cloudinary Configuration
cloudinary.config({
  cloud_name: "danebk4br",
  api_key: "763451773259672",
  api_secret: "OJyx-75thsihRT7HZqfl9EwAcTQ",
});

// Multer Storage for Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads", // Folder in Cloudinary
    allowedFormats: ["jpg", "png", "jpeg"], // Allowed file formats
  },
});

const upload = multer({ storage: storage });

// Function to retrieve disease information from a JSON file
async function getDiseaseInfo(diseaseName) {
  try {
    const data = await fs.promises.readFile("C:\\Users\\vashi\\Downloads\\final project - Copy\\plant-disease-detection\\disease_details.json", "utf-8");
    const diseaseDescriptions = JSON.parse(data);
    return diseaseDescriptions[diseaseName] || {}; // Return disease info if available
  } catch (error) {
    console.error("Error reading disease information:", error);
    return {}; // Return empty object if error occurs
  }
}

// Render the upload page
router.get("/", authreq, (req, res) => {
  res.render("upload", { filename: null });
});

// Handle image upload and send it to Flask for prediction
router.post("/", authreq, upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }

    const imageUrl = req.file.path; // Get the image path from multer
    const username = req.user.name;

    console.log("Processing image for user:", username);

    // Fetch the image as a buffer
    const axiosResponse = await axios.get(imageUrl, { responseType: "arraybuffer" });
    const imageBuffer = Buffer.from(axiosResponse.data);

    // Prepare the form data for the POST request
    const formData = new FormData();
    formData.append("file", imageBuffer, {
      filename: req.file.filename,
      contentType: req.file.mimetype,
    });

    // Send the image to Flask for prediction
    const predictionResponse = await axios.post("http://localhost:5000/predict", formData, {
      headers: formData.getHeaders(),
    });

    if (!predictionResponse.data || !predictionResponse.data.predicted_disease) {
      throw new Error("Invalid response from Flask API.");
    }

    // Extract prediction result and confidence from Flask response
    const { predicted_disease, confidence } = predictionResponse.data;

    console.log("Prediction result:", { predicted_disease, confidence });

    const cityname = await getCityName(); // Get city name
    const existingUserData = await imagesdb.findOne({ username });

    if (existingUserData) {
      // Update existing document by pushing new data to arrays
      await imagesdb.updateOne(
        { username },
        {
          $push: {
            imagepath: imageUrl,
            disease: predicted_disease,
            confidence: confidence,
            cityname: cityname,
          },
        }
      );
    } else {
      // Create a new document if one doesn't exist for this username
      await imagesdb.create({
        username,
        imagepath: [imageUrl],
        cityname,
        disease: [predicted_disease],
        confidence: [confidence],
      });
    }

    const diseaseInfo = await getDiseaseInfo(predicted_disease);

    // Render the result page with prediction data
    res.render("result", {
      image_url: imageUrl,
      predicted_disease,
      confidence,
      description: diseaseInfo.description || "Description not available.",
      symptoms: diseaseInfo.symptoms || [],
      treatments: diseaseInfo.treatments || [],
      pests: diseaseInfo.pests || [],
      fertilizers: diseaseInfo.fertilizers || [],
    });

  } catch (error) {
    console.error("Error during prediction process:", error.message);
    res.status(500).send("Error processing image. Please try again.");
  }
});

module.exports = router;
