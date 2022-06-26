const mongoose = require("mongoose");
const { ObjectId } = require('bson');

const userSchema = {
    
    username: String,
    secret_key: String,
    password: String
  }
  module.exports = mongoose.model("user", userSchema);