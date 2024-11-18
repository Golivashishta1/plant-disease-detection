const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const axios = require("axios");
const { authreq } = require("../controllers/authcontrol");
const FormData = require('form-data');
const fs = require("fs"); // Import fs for reading files
const {getCityName}=require("../geolocation")
const imagesdb=require("../models/imageschema")

// Configure multer storage for uploaded images
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./images"); // Save images in the images directory
    },
    filename: (req, file, cb) => {
        console.log(file);
        const uniquename=`${Date.now() + path.extname(file.originalname)}`
        cb(null,uniquename);
    }
});

const upload = multer({ storage: storage });

// Render the upload page
router.get("/", authreq, (req, res) => {
    res.render("upload", { filename: null });
});

// Handle image upload and send it to Flask for prediction
router.post("/", authreq, upload.single("image"), async (req, res) => {
    try {
        
        const imagePath = req.file.path; // Get the image path from multer
        const username=req.user.name
        
        const imageFile = fs.readFileSync(imagePath);

        // Prepare the form data for the POST request
        const formData = new FormData();
        formData.append("file", imageFile, {
            filename: req.file.filename,
            contentType: req.file.mimetype
        });

        const response = await axios.post("http://localhost:5000/predict", formData, {
            headers: formData.getHeaders(),
        });

        // Extract prediction result and confidence from Flask response
        const { predicted_disease, confidence } = response.data;
        console.log(imagePath)
        console.log(username);
        getCityName((cityname, error) => {
            if (error) {
              console.error("Failed to fetch city name:", error);
            } else {
              console.log("City name:", cityname);
            }
          });

        console.log(predicted_disease)
        console.log("confidence",confidence)
        const cityname = await getCityName();
        const existingUserData = await imagesdb.findOne({ username });

        if (existingUserData) {
            // Update existing document by pushing new data to arrays
            await imagesdb.updateOne(
                { username },
                {
                    $push: {
                        imagepath: imagePath,
                        disease: predicted_disease,
                        confidence: confidence,
                        cityname:cityname
                    },
                }
            );
        } else {
            // Create a new document if one doesn't exist for this username
            await imagesdb.create({
                username,
                imagepath: [imagePath],
                cityname,
                disease: [predicted_disease],
                confidence: [confidence],

            });}
        
            const diseaseInfo = await getDiseaseInfo(predicted_disease); 
        // Render the result page with prediction data
        // Render the result page with prediction data
res.render('result', {
    image_url: `/images/${req.file.filename}`,
    predicted_disease: predicted_disease, // Corrected from 'disease' to 'predicted_disease'
    confidence,
    description: diseaseInfo.description || "Description not available.",
    symptoms: diseaseInfo.symptoms || [],
    treatments: diseaseInfo.treatments || [],
    pests: diseaseInfo.pests || [],
    fertilizers: diseaseInfo.fertilizers || []
});


    } catch (error) {
        console.log(error);
        res.status(500).send("Error processing image. Please try again.");
    }
});

async function getDiseaseInfo(diseaseName) {
    try {
        const data = await fs.promises.readFile("disease_details.json.txt", "utf-8");
        const diseaseDescriptions = JSON.parse(data);
        return diseaseDescriptions[diseaseName] || {}; // Return disease info if available
    } catch (error) {
        console.error("Error reading disease information:", error);
        return {}; // Return empty object if error occurs
    }
}

module.exports = router;