// // const { Image } = require("canvas");
// // const fs = require("fs").promises;
// // const torch = require("torch");
// // const random = require("random");
// // const path = require("path");

// // const { AutoModelForImageClassification, AutoImageProcessor } = require('@huggingface/transformers');


// // // Load the model and processor directly from Hugging Face
// // async function loadModelAndProcessor() {
// //     try {
// //         const model = await AutoModelForImageClassification.from_pretrained("linkanjarad/mobilenet_v2_1.0_224-plant-disease-identification");
// //         const processor = await AutoImageProcessor.from_pretrained("linkanjarad/mobilenet_v2_1.0_224-plant-disease-identification");
// //       return { model, processor };
// //     } catch (error) {
// //       console.error("Error loading model and processor:", error);
// //       throw error; // Re-throw the error to handle it further
// //     }
// //   }
  
// //   async function loadAndPreprocessImage(imagePath) {
// //     try {
// //       const absoluteImagePath = path.resolve(imagePath);
// //       const imageBuffer = await fs.readFile(absoluteImagePath);
// //       const image = new Image();
// //       image.src = imageBuffer;
// //       return image;
// //     } catch (error) {
// //       console.error("Error loading and preprocessing image:", error);
// //       throw error; // Re-throw the error to handle it further
// //     }
// //   }
  

// // // Function to augment the image
// // function augmentImage(image) {
// //     const angles = [-5, 0, 5];
// //     const rotation = angles[Math.floor(Math.random() * angles.length)];
// //     image = image.rotate(rotation);

// //     if (Math.random() > 0.5) {
// //         image = image.transpose("flip", "horizontal");
// //     }

// //     const scaleFactor = random.uniform(0.8, 1.2);
// //     image = image.resize({
// //         width: Math.floor(image.width * scaleFactor),
// //         height: Math.floor(image.height * scaleFactor),
// //         mode: "bilinear",
// //     });

// //     return image;
// // }

// // // Function to predict image class
// // async function predictImage(filePath) {
// //     const image = await loadAndPreprocessImage(filePath);
// //     const predictions = [];
// //     const confidences = [];

// //     for (let i = 0; i < 5; i++) {  // Augmentation loop
// //         const augmentedImage = augmentImage(image);
// //         const inputs = processor(images=augmentedImage, return_tensors="pt");

// //         const outputs = await model(inputs);
// //         const logits = outputs.logits;
// //         const probabilities = torch.softmax(logits, dim=-1);
// //         const predictedClass = probabilities.argmax(-1).item();
// //         const confidence = probabilities[0][predictedClass].item() * 100;

// //         predictions.push(predictedClass);
// //         confidences.push(confidence);
// //     }

// //     // Calculate weighted votes based on confidence
// //     const predictionWeights = {};
// //     predictions.forEach((pred, index) => {
// //         const conf = confidences[index];
// //         predictionWeights[pred] = (predictionWeights[pred] || 0) + conf;
// //     });

// //     const finalPrediction = Object.keys(predictionWeights).reduce((a, b) =>
// //         predictionWeights[a] > predictionWeights[b] ? a : b
// //     );
// //     const avgConfidence = predictionWeights[finalPrediction] / predictions.filter(p => p === finalPrediction).length;

// //     const id2label = {
// //         0: "Apple Scab",
// //         1: "Apple with Black Rot",
// //         2: "Cedar Apple Rust",
// //         3: "Healthy Apple",
// //         4: "Healthy Blueberry Plant",
// //         5: "Cherry with Powdery Mildew",
// //         6: "Healthy Cherry Plant",
// //         7: "Corn (Maize) with Cercospora and Gray Leaf Spot",
// //         8: "Corn (Maize) with Common Rust",
// //         9: "Corn (Maize) with Northern Leaf Blight",
// //         10: "Healthy Corn (Maize) Plant",
// //         11: "Grape with Black Rot",
// //         12: "Grape with Esca (Black Measles)",
// //         13: "Grape with Isariopsis Leaf Spot",
// //         14: "Healthy Grape Plant",
// //         15: "Orange with Citrus Greening",
// //         16: "Peach with Bacterial Spot",
// //         17: "Healthy Peach Plant",
// //         18: "Bell Pepper with Bacterial Spot",
// //         19: "Healthy Bell Pepper Plant",
// //         20: "Potato with Early Blight",
// //         21: "Potato with Late Blight",
// //         22: "Healthy Potato Plant",
// //         23: "Healthy Raspberry Plant",
// //         24: "Healthy Soybean Plant",
// //         25: "Squash with Powdery Mildew",
// //         26: "Strawberry with Leaf Scorch",
// //         27: "Healthy Strawberry Plant",
// //         28: "Tomato with Bacterial Spot",
// //         29: "Tomato with Early Blight",
// //         30: "Tomato with Late Blight",
// //         31: "Tomato with Leaf Mold",
// //         32: "Tomato with Septoria Leaf Spot",
// //         33: "Tomato with Spider Mites or Two-spotted Spider Mite",
// //         34: "Tomato with Target Spot",
// //         35: "Tomato Yellow Leaf Curl Virus",
// //         36: "Tomato Mosaic Virus",
// //         37: "Healthy Tomato Plant"
// //     };

// //     return {
// //         predictedLabel: id2label[finalPrediction] || "Unknown",
// //         confidence: avgConfidence,
// //     };
// // }

// // module.exports = { predictImage };

// const { Image } = require("canvas");
// const fs = require("fs").promises;
// const torch = require("torch");
// const random = require("random");
// const path = require("path");

// const { AutoModelForImageClassification, AutoImageProcessor } = require('@huggingface/transformers');
// const modelURL = "https://huggingface.co/linkanjarad/mobilenet_v2_1.0_224-plant-disease-identification/resolve/main";



// // Load the model and processor directly from Hugging Face
// let model, processor;
// async function loadModelAndProcessor() {
//     if (!model || !processor) {
//         try {
//             model = await AutoModelForImageClassification.from_pretrained(`${modelURL}/pytorch_model.bin`);
//             processor = await AutoImageProcessor.from_pretrained(modelURL);
//         } catch (error) {
//             console.error("Error loading model and processor:", error);
//             throw error;
//         }
//     }
// }

// // Function to load and preprocess the image
// async function loadAndPreprocessImage(imagePath) {
//     try {
//         const absoluteImagePath = path.resolve(imagePath);
//         const imageBuffer = await fs.readFile(absoluteImagePath);
//         const image = new Image();
//         image.src = imageBuffer;
//         return image;   
//     } catch (error) {
//         console.error("Error loading and preprocessing image:", error);
//         throw error;
//     }
// }

// // Function to augment the image
// function augmentImage(image) {
//     const angles = [-5, 0, 5];
//     const rotation = angles[Math.floor(Math.random() * angles.length)];

//     // Rotate the image
//     image = image.rotate(rotation);

//     // Flip horizontally with 50% probability
//     if (Math.random() > 0.5) {
//         image = image.transpose("flip", "horizontal");
//     }

//     // Rescale the image
//     const scaleFactor = random.uniform(0.8, 1.2);
//     image = image.resize({
//         width: Math.floor(image.width * scaleFactor),
//         height: Math.floor(image.height * scaleFactor),
//         mode: "bilinear",
//     });

//     return image;
// }

// // Function to predict image class
// async function predictImage(filePath) {
//     await loadModelAndProcessor(); // Ensure model and processor are loaded

//     const image = await loadAndPreprocessImage(filePath);
//     const predictions = [];
//     const confidences = [];

//     for (let i = 0; i < 5; i++) { // Augmentation loop
//         const augmentedImage = augmentImage(image);
//         const inputs = processor({ images: augmentedImage, return_tensors: "pt" });

//         const outputs = await model(inputs);
//         const logits = outputs.logits;
//         const probabilities = torch.softmax(logits, dim=-1);
//         const predictedClass = probabilities.argmax(-1).item();
//         const confidence = probabilities[0][predictedClass].item() * 100;

//         predictions.push(predictedClass);
//         confidences.push(confidence);
//     }

//     // Calculate weighted votes based on confidence
//     const predictionWeights = {};
//     predictions.forEach((pred, index) => {
//         const conf = confidences[index];
//         predictionWeights[pred] = (predictionWeights[pred] || 0) + conf;
//     });

//     const finalPrediction = Object.keys(predictionWeights).reduce((a, b) =>
//         predictionWeights[a] > predictionWeights[b] ? a : b
//     );
//     const avgConfidence = predictionWeights[finalPrediction] / predictions.filter(p => p === finalPrediction).length;

//     const id2label = {
//         0: "Apple Scab",
//         1: "Apple with Black Rot",
//         2: "Cedar Apple Rust",
//         3: "Healthy Apple",
//         4: "Healthy Blueberry Plant",
//         5: "Cherry with Powdery Mildew",
//         6: "Healthy Cherry Plant",
//         7: "Corn (Maize) with Cercospora and Gray Leaf Spot",
//         8: "Corn (Maize) with Common Rust",
//         9: "Corn (Maize) with Northern Leaf Blight",
//         10: "Healthy Corn (Maize) Plant",
//         11: "Grape with Black Rot",
//         12: "Grape with Esca (Black Measles)",
//         13: "Grape with Isariopsis Leaf Spot",
//         14: "Healthy Grape Plant",
//         15: "Orange with Citrus Greening",
//         16: "Peach with Bacterial Spot",
//         17: "Healthy Peach Plant",
//         18: "Bell Pepper with Bacterial Spot",
//         19: "Healthy Bell Pepper Plant",
//         20: "Potato with Early Blight",
//         21: "Potato with Late Blight",
//         22: "Healthy Potato Plant",
//         23: "Healthy Raspberry Plant",
//         24: "Healthy Soybean Plant",
//         25: "Squash with Powdery Mildew",
//         26: "Strawberry with Leaf Scorch",
//         27: "Healthy Strawberry Plant",
//         28: "Tomato with Bacterial Spot",
//         29: "Tomato with Early Blight",
//         30: "Tomato with Late Blight",
//         31: "Tomato with Leaf Mold",
//         32: "Tomato with Septoria Leaf Spot",
//         33: "Tomato with Spider Mites or Two-spotted Spider Mite",
//         34: "Tomato with Target Spot",
//         35: "Tomato Yellow Leaf Curl Virus",
//         36: "Tomato Mosaic Virus",
//         37: "Healthy Tomato Plant"
//     };

//     return {
//         predictedLabel: id2label[finalPrediction] || "Unknown",
//         confidence: avgConfidence,
//     };
// }

// module.exports = { predictImage };
