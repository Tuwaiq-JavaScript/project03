const router = require('express').Router();
const profileC = require('../controller/profile');
const userseC = require('../controller/Users');
const todotaskC = require('../controller/todoTasks');

router.get('/profile',profileC.index); //get all 
router.post('/profile',profileC.create);//create 
router.put('/profile',profileC.update);//update 
router.delete('/profile',profileC.delete);//delet

 ////////////////////////////////////////////////////////////
 router.post('/todo/',todotaskC.create);//create
 router.get('/todo/',todotaskC.index);//get all 
 router.get('/todo/:id',todotaskC.findone);//get by id find by id 
 router.put('/todo/:id',todotaskC.update); //update by id
 router.delete('/todo/:id',todotaskC.delete); //delete by id 
 
 ////////////////////////////////////////////////////////////////
 router.post('/register',userseC.register);//from create users 
 router.post('/login',userseC.login); //login user

module.exports = router;