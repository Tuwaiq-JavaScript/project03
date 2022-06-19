const router = require('express').Router();
const TodoTaskController = require('../controller/TodoTasks');

//find ***************
router.get('/todo',TodoTaskController.index);


//find by id  ***************
router.get('/todo/:id',TodoTaskController.indexOne);

//search for text *************
router.get('/todo/search',TodoTaskController.indextwo);

//create***********
router.post('/todo',TodoTaskController.create);


//update***************
router.put('/todo/:id',TodoTaskController.update);


//Delete*****************
router.delete('/todo/:id',TodoTaskController.delete);

module.exports = router;


