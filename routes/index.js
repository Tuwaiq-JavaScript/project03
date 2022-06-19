const router = require('express').Router();
const userController = require('../controllers/user');
const profileController = require('../controllers/profile');
const todotasksController = require('../controllers/todoTasks');
router.post('/user/register',userController.create);
router.post('/user/login',userController.find);
router.post('/verify',userController.verify);
router.post('/profile/create',profileController.create);
// router.get('/profile',(req,res)=>{
//   let queryparamter =req.query;
//   console.log(queryparamter.age);
//   res.json(queryparamter);
// });
router.get('/profile',profileController.find);
router.put('/profile/update',profileController.update);
router.delete('/profile/delete',profileController.delete);
router.post('/tasks/create',todotasksController.create);
router.get('/tasks',todotasksController.search);
router.get('/tasks',todotasksController.tags);
router.get('/tasks',todotasksController.find);
router.get('/tasks/:id',todotasksController.index);
router.put('/tasks/update/:id',todotasksController.update);
router.delete('/tasks/delete/:id',todotasksController.delete);

module.exports = router;