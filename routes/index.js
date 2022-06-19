const router = require('express').Router();
const toDoControllers=require('../Controllers/toDo');
const profileController=require('../Controllers/profile');
const usersController=require('../Controllers/users');


//toDo get route
router.get('/toDo',toDoControllers.index);
router.get('/toDo/:_id',toDoControllers.indexone);
router.get('/toDo/search/:text',toDoControllers.indexSearch);
router.post('/toDo/create',toDoControllers.create);
router.put('/toDo/update/:user_id',toDoControllers.update);
router.delete('/toDo/delete/:user_id',toDoControllers.delete);



//user create routes
router.post('/create/User',usersController.create);
router.post('/login/user',usersController.login)
router.post('/verify/User',usersController.verify);


//profile routes
router.get('/profile',profileController.index);
router.post('/profile/create',profileController.create);
router.put('/profile/update/:_id',profileController.update);
router.delete('/profile/delete/:_id',profileController.delete);

module.exports=router;