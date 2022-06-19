const router = require('express').Router();
const profileController = require('../controller/profile');

//insert-create
router.post('/profile',profileController.create);
//find
router.get('/profile',profileController.index);
//update
router.put('/profile',profileController.update);
//Delete
router.delete('/profile',profileController.delete);

module.exports = router;