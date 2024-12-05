from flask import Flask, request, jsonify, render_template, url_for
from transformers import AutoImageProcessor, AutoModelForImageClassification
from PIL import Image
import io
import random
import torch
import os
from torchvision import transforms, models
import json
import torch.nn.functional as F  # Import F for softmax usage

app = Flask(__name__)

# Configure static folder and transformations
app.config['UPLOAD_FOLDER'] = 'static/images'
transform = transforms.Compose([
    transforms.RandomRotation(5),
    transforms.RandomHorizontalFlip(),
    transforms.RandomVerticalFlip(),
    transforms.ColorJitter(brightness=0.2, contrast=0.2, saturation=0.2, hue=0.1),
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
])

# Load model and data
processor = AutoImageProcessor.from_pretrained("linkanjarad/mobilenet_v2_1.0_224-plant-disease-identification")
model = AutoModelForImageClassification.from_pretrained("linkanjarad/mobilenet_v2_1.0_224-plant-disease-identification")
model.eval()

plant_model = models.mobilenet_v2(pretrained=True)
plant_model.eval()

with open("C:\\Users\\vashi\\Downloads\\final project - Copy\\plant-disease-detection\\disease_details.json", "r") as f:
    disease_descriptions = json.load(f)

id2label = {
    "0": "Apple Scab",
    "1": "Apple with Black Rot",
    "2": "Cedar Apple Rust",
    "3": "Healthy Apple",
    "4": "Healthy Blueberry Plant",
    "5": "Cherry with Powdery Mildew",
    "6": "Healthy Cherry Plant",
    "7": "Corn (Maize) with Cercospora and Gray Leaf Spot",
    "8": "Corn (Maize) with Common Rust",
    "9": "Corn (Maize) with Northern Leaf Blight",
    "10": "Healthy Corn (Maize) Plant",
    "11": "Grape with Black Rot",
    "12": "Grape with Esca (Black Measles)",
    "13": "Grape with Isariopsis Leaf Spot",
    "14": "Healthy Grape Plant",
    "15": "Orange with Citrus Greening",
    "16": "Peach with Bacterial Spot",
    "17": "Healthy Peach Plant",
    "18": "Bell Pepper with Bacterial Spot",
    "19": "Healthy Bell Pepper Plant",
    "20": "Potato with Early Blight",
    "21": "Potato with Late Blight",
    "22": "Healthy Potato Plant",
    "23": "Healthy Raspberry Plant",
    "24": "Healthy Soybean Plant",
    "25": "Squash with Powdery Mildew",
    "26": "Strawberry with Leaf Scorch",
    "27": "Healthy Strawberry Plant",
    "28": "Tomato with Bacterial Spot",
    "29": "Tomato with Early Blight",
    "30": "Tomato with Late Blight",
    "31": "Tomato with Leaf Mold",
    "32": "Tomato with Septoria Leaf Spot",
    "33": "Tomato with Spider Mites or Two-spotted Spider Mite",
    "34": "Tomato with Target Spot",
    "35": "Tomato Yellow Leaf Curl Virus",
    "36": "Tomato Mosaic Virus",
    "37": "Healthy Tomato Plant"
}

imagenet_labels = [
    "tree", "flower", "leaf", "fruit", "plant", "shrub", "herb", "vegetable",
    "mushroom", "vine", "cactus", "blossom", "grass", "fern", "seedling", 
    "bark", "root", "flora"
]



def is_plant_image(image):
    """Check if the uploaded image contains a plant."""
    input_tensor = transform(image).unsqueeze(0)
    with torch.no_grad():
        output = plant_model(input_tensor)
        probabilities = F.softmax(output, dim=1)
        top_class_idx = output.argmax(-1).item()
        top_class_name = imagenet_labels[top_class_idx]
    return any(plant in top_class_name.lower() for plant in imagenet_labels)

def augment_image(image):
    """Apply augmentations to the input image."""
    angles = [-5, 0, 5]
    rotation = random.choice(angles)
    image = image.rotate(rotation)
    if random.random() > 0.5:
        image = image.transpose(Image.FLIP_LEFT_RIGHT)
    scale_factor = random.uniform(0.9, 1.1)
    new_size = (int(image.width * scale_factor), int(image.height * scale_factor))
    image = image.resize(new_size, Image.LANCZOS)
    return image

def predict_with_augmentation(image, num_augmentations=5):
    predictions, confidences = [], []

    for _ in range(num_augmentations):
        augmented_image = augment_image(image)
        inputs = processor(images=augmented_image, return_tensors="pt")
        outputs = model(**inputs)
        logits = outputs.logits
        predicted_class = logits.argmax(-1).item()
        confidence = logits.softmax(dim=-1).max().item() * 100
        predictions.append(str(predicted_class))
        confidences.append(confidence)

    prediction_weights = {}
    for pred, conf in zip(predictions, confidences):
        prediction_weights[pred] = prediction_weights.get(pred, 0) + conf

    final_prediction = max(prediction_weights, key=prediction_weights.get)
    avg_confidence = prediction_weights[final_prediction] / predictions.count(final_prediction)
    return final_prediction, avg_confidence

@app.route("/", methods=["GET"])
def upload_page():
    return render_template("upload.ejs")

@app.route("/predict", methods=["POST"])
def predict():
    if 'file' not in request.files:
        return jsonify({"error": "No file provided"}), 400

    file = request.files['file']
    image = Image.open(io.BytesIO(file.read())).convert("RGB")
    predicted_class, avg_confidence = predict_with_augmentation(image)
    predicted_label = id2label.get(str(predicted_class), "Unknown Disease")

    return jsonify({
        "predicted_disease": predicted_label,
        "confidence": avg_confidence
    })

@app.route("/upload", methods=["POST"])
def upload():
    if 'image' not in request.files:
        return render_template("upload.ejs", error="No image uploaded.")

    file = request.files['image']
    filename = f"{random.randint(1, 10000)}_{file.filename}"
    image_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    file.save(image_path)

    image = Image.open(image_path).convert("RGB")

    if not is_plant_image(image):
        return jsonify({"error": "Image does not contain a plant."}), 400

    predicted_class, avg_confidence = predict_with_augmentation(image)
    predicted_label = id2label.get(str(predicted_class), "Unknown Disease")

    disease_info = disease_descriptions.get(predicted_label, {})
    description = disease_info.get("description", "Description not available.")
    symptoms = disease_info.get("symptoms", [])
    treatments = disease_info.get("treatments", [])
    pests = disease_info.get("pests", [])
    fertilizers = disease_info.get("fertilizers", [])


    return render_template(
        "result.ejs",
        image_url=url_for('static', filename=f"images/{filename}"),
        predicted_disease=predicted_label,
        confidence=avg_confidence,
        description=description,
        symptoms=symptoms,
        treatments=treatments,
        pests=pests,
        fertilizers=fertilizers
    )

if __name__ == "__main__":
    app.run(port=5000)
