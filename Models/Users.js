const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  username: String,
  secret_key: mongoose.ObjectId,
  password: String,
})

const Users = mongoose.model("Users", userSchema)

module.exports = Users
