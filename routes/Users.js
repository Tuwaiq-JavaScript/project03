const router = require('express').Router();
const todoController = require('../controller/todo');
const userController = require('../controller/Users');
const profileController = require('../controller/Profile');

router.post('/Users/create',userController.create);
//insert-create
router.post('/Users/create',todoController.create);
//find
router.get('/Users',todoController.index);
//update
router.put('/Users/update/:id',todoController.update);
//Delete
router.delete('/Users/delete/:id',todoController.delete);

module.exports = router;

