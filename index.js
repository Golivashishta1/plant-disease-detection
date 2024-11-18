const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const port = 1000;
const app = express();
const homeroute = require("./routes/homeroute");
const signuproute = require("./routes/signuproute");
const loginroute = require("./routes/loginroute");
const googleroute = require("./routes/googleroute");
const logoutroute = require("./routes/logoutroute");
const forgotroute=require("./routes/forgotroute")
const passport = require("passport");
const profileroute=require("./routes/profileroute")
const uploadroute=require("./routes/uploadroute")
require("./config/passport-setup");
const session=require("express-session");
const cookie = require("cookie-parser");
const mongoconnect=require("connect-mongo");
const keys=require("./config/keys")
const { authreq } = require("./controllers/authcontrol");

// Middleware and static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookie());


// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/agrolens")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

app.use(session({
    secret:keys.clientSecret,
    resave:false,
    saveUninitialized:true,
    // store: mongoconnect.create({
    //     mongoUrl: `mongodb://localhost:27017/agrolens`,
    //     collectionName: "sessions",
    //     ttl: 1000 * 60, // Replace <desired value> with the number of minutes
    //     autoRemove: 'native'
    // }),
        
    // cookie: { 
    //     maxAge:1000*60,
    //     secure: false,
    // },
}));
// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// JWT Middleware (Auth)
// Ensure authentication on protected routes

// Set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Route definitions
// Apply authreq middleware to protected routes only
app.use("/home",homeroute);
app.use("/signup", signuproute);
app.use("/login", loginroute);
app.use("/auth/google", googleroute);
app.use("/logout", logoutroute);
app.use("/upload",uploadroute);
app.use("/forgot",forgotroute);
app.use("/profile",profileroute)

// Start server
app.listen(port, () => {
    console.log("Server is connected on port", port);
});
