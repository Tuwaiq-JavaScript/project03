const router = require('express').Router();
const todoController = require('../controller/todo');
const userController = require('../controller/Users');
const profileController = require('../controller/Profile');



var search = {
    get: function (req, res) {
       var query = {};
       if(req.query.text_to_search_for){
         query.state = { "$regex": req.query.text_to_search_for, "$options": "i" };
       }
       if(req.query.text_to_search_for){
         query.Skills = { "$regex": req.query.text_to_search_for, "$options": "i" }
       }
   
       Jobs.find(query, function(err, result) {
           if (err) {
               console.log('Not a Valid Search');
               res.status(500).send(err, 'Not a Valid Search');
           }else {
               res.json(result);
           }            
       });
    }
   };
   
router.post('/users/create',todoController.create);
//insert-create
router.post('/todo/create',todoController.create);
//find
router.get('/todo',todoController.index);
router.get('todo/:id',todoController);
//update
router.put('/todo/update/:id',todoController.update);
//Delete
router.delete('/todo/delete/:id',todoController.delete);

module.exports = router;

