const router =require('express').Router();
const userController =require('../contoller/user')

router.post('/register',userController.create)
router.post('/login',userController.create)
module.exports = router;
