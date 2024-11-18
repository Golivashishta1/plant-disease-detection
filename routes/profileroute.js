const express = require('express');
const router = express.Router();
const imagesdb = require("../models/imageschema"); // Update with your actual connection path
const {authreq}=require("../controllers/authcontrol");

// Profile route
router.get('/', authreq,async (req, res) => {
    // Assuming you have user information in the session
    console.log(req.user);
    const username = req.user.name; // Adjust this to your session logic
    try {
        // Fetch user data from MongoDB
        const userData = await imagesdb.findOne({ username });
        
        // Check if user data exists
        if (userData) {
            // Render profile page with user data
            res.render('profile', {
                user:req.user,// Assuming you have user's name in the session
                 // Assuming you have user's role in the session
             // Assuming you have user's city in the session
                results: userData.imagepath.map((path, index) => ({
                    imagepath: path,
                    disease: userData.disease[index],
                    confidence: userData.confidence[index],
                    cityname: userData.cityname[index], // Assuming you have an uploadDate array
                })),
            });
        } else {
            // Handle case when user data is not found
            res.render('profile', {
                user:req.user,
                results: [],
                message: "No recent uploads found."
            });
        }
    } catch (error) {
        console.error("Error fetching user data:", error);
        res.status(500).send("Internal Server Error");
    }
});

// router.use(authreq);

module.exports = router;
