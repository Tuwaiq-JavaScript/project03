const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const express = require("express")
const userRouter = require("./Routes/users")
const profileRouter = require("./Routes/profile")
const todoRouter = require("./Routes/todoTask")
// const UserModel = require("../Models/Users")
const app = express()
const PORT = 9000
const saltRounds = 10
const mySecret = "secret"
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/ToDo_List")

app.use("/users", userRouter) //the first path in url 
app.use("/profile", profileRouter)
app.use("/todotask", todoRouter)

app.listen(PORT, () => console.log(`Express running on port: ${PORT}`))
