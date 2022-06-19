const router = require('express').Router();
const userController = require('../controller/user');


router.post('/register',userController.create);

router.post('/login',userController.login);
//insert-create




module.exports = router;