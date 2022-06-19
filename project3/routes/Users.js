const router = require('express').Router();
const UsersController = require('../controller/Users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const mySecret = 'secret'
//login********

router.post('/login',UsersController.createOne);

//register ***************
router.post('/register',UsersController.create);

module.exports = router;
