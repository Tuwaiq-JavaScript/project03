const router = require('express').Router();
const todoController = require('../controller/Profile');
const userController = require('../controller/Users');
const profileController = require('../controller/Profile');

//insert - creat
router.post('/Profile/login',profileController.create);
router.post('/Profile/register',profileController.create);
router.post('/Profile/create',profileController.create);
//find
router.get('/page',profileController.index);

//update
router.put('/Profile/update/:id',profileController.update);
//Delete
router.delete('/Profile/delete/:id',profileController.delete);

module.exports = router;

