const router = require("express").Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const todoscontroller = require("../controller/todo");
const userscontroller = require("../controller/user");
const profilescontroller = require("../controller/profile");
//users routes
//user register
router.post("/users/register", userscontroller.create);
//user login

router.post('/users/login', userscontroller.login);

//profile routes
//profile index
router.get("/profiles", profilescontroller.index);
//profile create
router.post("/profiles/create", profilescontroller.create);
//profile update
router.put("/profiles/update/:id", profilescontroller.update);
//profile delete
router.delete("/profiles/delete/:id", profilescontroller.delete);

//

//todo routes
router.get("/todos", todoscontroller.index);
//todo search
router.get("/todos/search", todoscontroller.search);
//todo get by id
router.get("/todos/:id", todoscontroller.getById);
//todo create
router.post("/todos/create", todoscontroller.create);
//todo update
router.put("/todos/update/:id", todoscontroller.update);
//todo delete
router.delete("/todos/delete/:id", todoscontroller.delete);


//todo index
module.exports = router;
