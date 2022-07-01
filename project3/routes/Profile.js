const router = require('express').Router();
const ProfileController = require('../controller/Profile');

//find ***************
router.get('/Profile',ProfileController.index);
//insert-create********
router.post('/Profile',ProfileController.create);
//update***************
router.put('/Profile',ProfileController.update);
//Delete*****************
router.delete('/Profile',ProfileController.delete);

module.exports = router;

