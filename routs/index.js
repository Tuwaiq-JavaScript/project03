const router = require('express').Router();
const taskCon = require('../controller/Tasks');
const userCon = require('../controller/Users');
const profileCon = require('../controller/Profile');

//task CRUD
router.get('/todo',taskCon.index);
router.get('/todo/:id',taskCon.viewOne);
router.get('/todoText',taskCon.search);
router.post('/todo',taskCon.create);
router.put('/todo/:id',taskCon.update);
router.get('/todoTags',taskCon.searchTags);
router.delete('/todo/:id',taskCon.delete);

//profile CRUD
router.get('/profile',profileCon.index);
router.post('/profile',profileCon.create);
router.put('/profile',profileCon.update);
router.delete('/profile',profileCon.delete);

//user CRUD
router.post('/login',userCon.login); 
router.post('/register',userCon.register);
 

module.exports = router;
