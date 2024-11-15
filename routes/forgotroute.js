const express=require("express");
const router=require("express").Router();
const crypto=require("crypto");
const nodemailer=require("nodemailer");
const users = require("../models/userschema");
const { error } = require("console");
require('dotenv').config({ path: './encrypt/.env' });


router.get("/email", (req, res) => {
    res.render("forgot_email", { error: "" });
});

router.post("/email", async (req, res) => {
    const { email } = req.body;
    req.session.wantemail = email;
    console.log("Requested email:", req.session.wantemail);
    
    const user = await users.findOne({ email });
    console.log("User found:", user);
    
    if (user) {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS 
            }
        });

        function generateOTP() {
            return crypto.randomInt(1000, 9999).toString();
        }

        const genotp = generateOTP();
        req.session.genotp = genotp;
        console.log("Generated OTP:", genotp);

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Your Agrolens OTP Code: Secure Your Access",
            text: `
            Dear User,
            
            We have generated a One-Time Password (OTP) to facilitate a secure login to your Agrolens account. Please find the details below.
            
            Your OTP Code: ${genotp}
            
            This code is valid for 5 minutes and should be kept confidential. Do not share this code with anyone. If you did not request an OTP, please disregard this message and consider updating your account security.
            
            Thank you for choosing Agrolens as your trusted partner in plant health insights.
            
            Warm regards,
            The Agrolens Team
            `,
            html: `
            <p>Dear ${user.name},</p>
            
            <p>We have generated a <strong>One-Time Password (OTP)</strong> to facilitate a secure login to your Agrolens account. Please find the details below.</p>
            
            <p><strong>Your OTP Code:</strong> <span style="font-size: 18px; color: #4CAF50;">${genotp}</span></p>
            
            <p>This code is valid for 5 minutes and should be kept confidential. Do not share this code with anyone.</p>
            
            <p>If you did not request an OTP, please disregard this message and consider updating your account security.</p>
            
            <p>Thank you for choosing Agrolens as your trusted partner in plant health insights.</p>
            
            <p>Warm regards,</p>
            <p><strong>The Agrolens Team</strong></p>
            `
        };

        try {
            await transporter.sendMail(mailOptions);
            console.log(`OTP sent to ${email}: ${genotp}`);
            res.redirect("/forgot/otp");
        } catch (error) {
            console.error("Error sending OTP:", error);
            res.render("forgot_email", { error: "Could not send OTP. Try again later." });
        }
    } else {
        res.render("forgot_email", { error: "Enter the registered email only!" });
    }
});

module.exports = router;



router.get("/otp",  (req,res)=>{
    res.render("otp")
})

router.post("/otp", (req,res)=>{
    const otp = req.body.otp;
    console.log(otp);
    console.log(req.session.genotp);
    const tarotp=req.session.genotp.toString();

        if (otp === tarotp) {
            console.log("correct otp")
            // OTP is correct, redirect to the change password page
            res.redirect('/forgot/changepass');
        } else {
            console.log("wrong otp")
            // OTP is incorrect, send error message
            res.render('otp', { error: "Invalid OTP. Please try again." });
        }
        }
    
    
)

router.get("/changepass",(req,res)=>{
    res.render("changepass",{error:""});
})

router.post("/changepass",async (req,res)=>{
    const {newPassword,confirmPassword}=req.body;
    console.log(newPassword);
    console.log(confirmPassword);
    if(newPassword===confirmPassword){
        console.log("pass changed")
        const updatedUser = await users.findOneAndUpdate(
            { email: req.session.wantemail },            // Identify the user by their email
            { $set: { password: newPassword } },  // Update the password field
            { new: true }                    // Return the updated document
        );
        if (updatedUser) {
            // Password successfully updated
            res.redirect("/login"); // Redirect to login or another appropriate page
        }
    }
    else{
        return res.render("change-password", { error: "Passwords do not match." });

    }
})

module.exports=router;