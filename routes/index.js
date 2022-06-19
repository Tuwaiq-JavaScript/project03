const router = require('express').Router();
// profile
const profilecontroller = require('../controller/profile');

//insert-create
router.post("/profile/create",profilecontroller.create);
//find
router.get("/profile",profilecontroller.index);
//update
router.put("/profile/update/:name",profilecontroller.update);
//Delete
router.delete("/profile/delete/:id",profilecontroller.delete);

// task
const taskcontroller = require('../controller/task');
//insert-create
router.post("/task/create",taskcontroller.create);
//find
router.get("/task",taskcontroller.index);
router.get("/task/:id",taskcontroller.index1);
router.get("/task/tags/:id",taskcontroller.select);
//update
router.put("/task/update/:id",taskcontroller.update);
//Delete
router.delete("/task/delete/:id",taskcontroller.delete);

// user
const usercontroller = require('../controller/user');
//insert-create
router.post("/user/register",usercontroller.create);
router.post("/user/login",usercontroller.login);


module.exports = router;