const express = require("express")
const { getAllUsers, userRegester, userLogin, userVerify } = require("../Controllers/Users")

const userRouter = express.Router()

userRouter.get("/", getAllUsers)
userRouter.post("/create", userRegester)
userRouter.post("/login", userLogin)
userRouter.post("/verify", userVerify)

module.exports = userRouter
