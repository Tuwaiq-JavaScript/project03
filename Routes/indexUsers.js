const router = require('express').Router();
const UsersController = require('../controller/Users');
const users= require ('../models/Users');
const express = require('express')

router.post('/login',UsersController.index);
router.post('/register',UsersController.post);


module.exports = router;