const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  _id: String,
  username: { type: String, unique: true },
  password: String,
});

module.exports = mongoose.model("users", userSchema);
