const mongoose = require("mongoose")


//define user schema
const userSchema = new mongoose.Schema({
  username: String,
  secret_key: mongoose.ObjectId,
  password: String,
})

//define user model
const Users = mongoose.model("Users", userSchema)

//export user to routes
module.exports = Users
