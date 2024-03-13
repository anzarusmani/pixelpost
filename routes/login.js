const express = require("express");
const path = require("path");
const User = require("../models/user");
//const idPass = require("../data/idPass");

const router = express.Router();

// Handle login POST request
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username }); // Query by username only

    if (!user) {
      // User not found
      console.log("User not found");
      return res.status(401).send("Invalid username or password");
    }

    // Compare passwords
    if (user.password !== password) {
      console.log("Incorrect password");
      return res.status(401).send("Invalid username or password");
    }

    // Authentication successful, redirect to index page
    console.log("Authentication successful");
    res.redirect("/index.html");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../templates/index.html"));
});

router.get("/login.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../templates/login.html"));
});

router.get("/index.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../templates/index.html"));
});

router.get("/account.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../templates/account.html"));
});

router.get("/cart.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../templates/cart.html"));
});

module.exports = router;
