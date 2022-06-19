const express = require("express")
const { addProfile, getProfile, updateProfile, deleteProfile } = require("../Controllers/Profile")
const profileRouter = express.Router()

profileRouter.post("/create", addProfile)
profileRouter.get("/", getProfile)
profileRouter.put("/update/:id", updateProfile)
profileRouter.delete("/delete/:id", deleteProfile)

module.exports = profileRouter
