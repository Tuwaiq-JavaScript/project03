const TodoTask = require('../model/todoTasks');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const mySecret = 'secret';

module.exports = {
    index:(req,res)=>{
        TodoTask.find({}).then((data) => {
            res.json(data);
           });
     },
     findone:(req,res)=>{
        TodoTask.findOne({_id:req.params.id}).then((data) => {
            res.json({data});
            });
        },

    create:(req,res)=>{
        const c= new TodoTask(req.body);
         c.save().then(() => res.json({"msg":" TodoTask  added"})); 
       
     },
    update:(req,res)=>{
       
        TodoTask.updateOne({_id:req.params.id},{text:req.body.text}).then(()=>{
         res.json({"msg":" TodoTask updated"});
        });
     },
    delete:(req,res)=>{
        TodoTask.deleteOne({_id:req.params.id}).then(()=>{
            res.json({"msg":"TodoTask deleted"});
        });
    }
}