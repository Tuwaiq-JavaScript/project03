const router = require('express').Router();
const TodoController = require('../controller/Todo');
const todo = require('../models/Todo');


//find
router.get('/todo',TodoController.index);
router.get('todo?search',TodoController.indextxt);
router.get('/todo/:id',TodoController.indexId);
//insert-create
router.post('/todo/create',TodoController.create);
//update
router.put('/todo/:id/update',TodoController.update);
//Delete
router.delete('/todo/:id/delete',TodoController.delete);

module.exports = router;