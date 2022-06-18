const router = require('express').Router()
const userController = require('../controllers/user')
const userModel = require("../model/User")
const express = require('express')


// //post
// /login

// //post
// /register

router.get('/user/:id',userController.userFind )

router.post('/user/register', userController.create)

router.delete('user/delete/:id', userController.delete)

router.post('/login', userController.post)

module.exports = router
