const express = require("express");
const router = express.Router();
const users = require("../models/userschema");
const jwt = require("jsonwebtoken");
const maxAge=1000*60*60;
const {getCityName}=require("../geolocation");
router.get("/", (req, res) => {
  res.render("login/login", { error: null });
});
router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await users.findOne({ email });

    if (!user) {
      // If user is not found, show error
      return res.render("login/login", { error: "Invalid email" });
    }



    // Since bcrypt is not used, directly compare the plain text passwords
    if (password !== user.password) {
      return res.render("login/login", { error: "Invalid password" });
    }
    const city = await getCityName;
    console.log(city);
    const token = jwt.sign({ id: user._id, email: user.email, username: user.name,cityname:city }, "B4t2F13Y", { expiresIn: "1h" });

    // Set token as a cookie
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: maxAge,
      secure: true,
      path: "/",
    });
    
    console.log("token:",token)
    return res.redirect("/home");

  } catch (err) {
    console.error("Login error:", err);
    return res.render("login/login", { error: "An error occurred, please try again" });
  }
});

module.exports = router;
