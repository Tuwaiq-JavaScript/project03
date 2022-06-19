const router = require('express').Router();
const userController = require('../controller/user');
router.post('/user/create',userController.create);
router.get('/users/display',userController.display);
router.post('/user/login',userController.login);
router.post('/user/verification',userController.verification);
//-------------------------------------
//Profile
const profileController=require('../controller/profile')
router.post('/profile/create',profileController.create);
//find
router.get('/profile',profileController.index);
//update
router.put('/profile/update/:id',profileController.update);
//Delete
router.delete('/profile/delete/:id',profileController.delete);
//-----------------------------------------------
//ToDo
const taskController=require('../controller/todo');
router.post('/task/create',taskController.create);
router.get('/todo',taskController.index)
router.get('/todo/:id',taskController.getById)
router.get('/todo/search/:text',taskController.search)
router.put('/todo/update/:id',taskController.update)
router.delete('/todo/delete/:id',taskController.delete)
module.exports = router;