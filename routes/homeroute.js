const express=require("express");
const { homeget } = require("../controllers/homecontrol");
// Assuming this is in your homeroute.js file
const router = express.Router();
const jwt = require("jsonwebtoken");
const secretKey = "B4t2F13Y"; // Use your secret key
const axios = require("axios");
const path=require("path")
const fs=require("fs");
const { plates } = require("transformers");
const plantsData = require('./plantcare'); // Import the data
router.get("/", (req, res) => {
  const token = req.cookies.jwt; // Get the token from cookies
  let decodedToken = null;

  if (token) {
    try {
      decodedToken = jwt.verify(token, secretKey); // Verify the token
    } catch (error) {
      console.error("Token verification error:", error);
    }
  }

  res.render("homepage", {
    token: decodedToken, // Pass the decoded token or null if verification fails
    user: decodedToken ? { id: decodedToken.id, username: decodedToken.username } : null,
  });
})
;

module.exports = router;
