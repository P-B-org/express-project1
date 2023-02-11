const mongoose = require("mongoose");

const signSchema = new mongoose.Schema({
  name: String,
  sun: String,
  moon: String,
  ascendant: String,
});

const Sign = mongoose.model("Sign", signSchema);
module.exports = Sign;
