
const router = require("express").Router();
//const jwt = require('jsonwebtoken');
//const bcrypt = require('bcrypt');
const todoscontroller = require("../controller/Todo");//
const userscontroller = require("../controller/user");//
const profilescontroller = require("../controller/profile");//

// register
router.post("/register", userscontroller.create);
// login

router.post('/login', userscontroller.login);

module.exports = router;