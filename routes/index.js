const router = require('express').Router();

//profile
const profileController = require('../controller/profile');
//insert-create
router.post('/profile/create',profileController.create);
//find
router.get('/profile',profileController.index);
//update
router.put('/profile/update/:id',profileController.update);
//Delete
router.delete('/profile/delete/:id',profileController.delete);
//user
const userController = require('../controller/user');
router.post('/user/create',userController.create);
//find
router.get('/user/login',userController.login);
router.post('/user/display',userController.display);
router.post('/user/verification',userController.verification);
//task
const taskController = require('../controller/task');
router.post('/task/create',taskController.create);
//find
router.get('/task',taskController.index);
//update
router.get('/task/search/:text',taskController.search);
router.put('/task/update/:id',taskController.update);
//Delete
router.delete('/task/delete/:id',taskController.delete);

module.exports = router;