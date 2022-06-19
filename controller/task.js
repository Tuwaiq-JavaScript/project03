const task =require ('../model/task');
const user =  require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports={
    create:(req,res)=>{
        const newTask=new task(req.body);
        newTask.save().then(()=>res.json({"msg":"Task created"}));
    },
    delete:(req,res)=>{
        task.deleteOne({_id:req.params.id}).then(()=>{
            res.json({"msg":"task deleted"});
        })},
        update:(req,res)=>{
        task.updateOne({_id:req.params.id},{text:req.body.text,Tags:req.body.Tags}).then(()=>{res.json({"msg":"task updated"})
             })
        },
    
    
    }