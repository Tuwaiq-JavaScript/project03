const router = require('express').Router();
const userController = require('../controllers/user');

router.post('/user/register',userController.create);

router.post('/user/login',userController.find);

router.post('/verify',userController.verify);
module.exports = router;