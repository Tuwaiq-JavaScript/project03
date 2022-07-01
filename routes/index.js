
const router =require('express').Router();
const userController =require('../contoller/user')
const profileContoller =require('../contoller/profile')
const todoController =require('../contoller/todo')

router.post('/register',userController.create)
router.post('/login',userController.create)
router.post('/profile',profileContoller.create)
router.post('/todo',todoController.create)

router.get('/profile',profileContoller.index)
router.get('/todo',todoController.index)


router.put('/profile',profileContoller.update)
router.put('/todo/:id',todoController.update)

router.delete('/profile',profileContoller.delete)
router.delete('/todo/:id',todoController.delete)
module.exports = router;