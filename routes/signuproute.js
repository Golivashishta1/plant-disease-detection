const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const path = require("path");
require('dotenv').config({ path: './encrypt/.env' });
const users = require("../models/userschema");

router.get("/", (req, res) => {
    res.render("signup/signup", { error: null });
});

router.post("/", async (req, res) => {
    const { name, email, password } = req.body;

    const existuser=await users.findOne({email});
    if(!existuser){
        const user = await users.create({
            name,
            email,
            password
        });

        // Setup Nodemailer transporter using environment variables
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, // Use environment variable
                pass: process.env.EMAIL_PASS // Use environment variable
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Welcome to Agro Lens: Revolutionizing Plant Care with Advanced Disease Detection",
            html: `
                <div style="font-family: poppins, sans-serif; color: #333;">
                    <h2>Welcome to Agro Lens!</h2>
                    <p>Dear ${name},</p>
                    <p>We’re thrilled to have you join a community dedicated to transforming plant health management. At <strong>Agro Lens</strong>, we understand the importance of early and accurate detection of plant diseases.</p>
                    <p>With our platform, you can simply scan a leaf image, and we’ll provide you with immediate insights into any potential diseases affecting your crops.</p>
                    <p>By leveraging cutting-edge technology, we aim to help farmers, gardeners, and plant enthusiasts protect their plants, improve yields, and contribute to a healthier, greener future.</p>
                    <p>If you ever need assistance or have questions, our team is here to support you on your journey toward healthier plants!</p>
                    <br>
                    <a href="/home" style="
                        display: inline-block;
                        padding: 10px 20px;
                        font-size: 16px;
                        color: white;
                        background-color: #28a745; /* Green background */
                        text-decoration: none;
                        border-radius: 5px;
                    ">Visit Our Website</a>
                    <br><br>
                    <p>Best regards,<br><strong>The Agro Lens Team</strong><br><em>Helping You Grow Healthier Plants, One Scan at a Time</em></p>
                </div>
            `
        };
        

        // Send the email
        await transporter.sendMail(mailOptions);
        console.log(`Email sent to ${name}`);

        res.render("login/login", { error: null });
    
    }
        // Create the user in the database
      else{
        res.render("login/login", { error: null });

      }  
        // Redirect to login page after successful signup
    
});

module.exports = router;
