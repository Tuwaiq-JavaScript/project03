//I tried so much I couldn't divide routes 
const router =require('express').Router();

const todoController =require('../contoller/todo')
router.post('/todo',todoController.create)

router.get('/todo',todoController.index)


//router.put('/todo/:id')

//router.delete('/todo/:id',profileContoller.delete)
module.exports = router;
