// models/user.js
const mongoose = require("mongoose");

const pixelPostSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const PixelPost = mongoose.model("PixelPost", pixelPostSchema, "pixelpost");

module.exports = PixelPost;