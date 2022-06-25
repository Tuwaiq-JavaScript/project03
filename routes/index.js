const router = require("express").Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const todoscontroller = require("../controller/todo");
const userscontroller = require("../controller/user");
const profilescontroller = require("../controller/profile");
//users routes
//user register
router.post("/register", userscontroller.create);
//user login

router.post('/login', userscontroller.login);
//done

//




//todo index
module.exports = router;
