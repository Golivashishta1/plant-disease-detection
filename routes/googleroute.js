const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt=require("jsonwebtoken")

// Google OAuth login route
router.get("/", passport.authenticate("google", {
    scope: ["profile", "email"] // Request profile and email from Google
}));

// Google OAuth callback route
router.get('/home', passport.authenticate("google", { failureRedirect: '/login' }),
     (req, res) => {
        const token=jwt.sign({username:req.user.username,email:req.user.email,cityname:req.user.cityname},"B4t2F13Y",{
            expiresIn:"1h",
        });
        res.cookie("jwt",token,{secure:true,maxAge:1000*60});
         // Successful authentication, redirect to the home page or dashboard
         res.redirect('/home'); // Change this to the appropriate landing page after login
     }
 );

module.exports = router; // Export the router
