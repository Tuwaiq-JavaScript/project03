const ToDo=require('../model/todo')
const User = require('../model/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { findById } = require('../model/user');
const todo = require('../model/todo');

module.exports={
    index:(req,res)=>{
        ToDo.find({}).then((data)=>{
            res.json(data);
        });
    },
    getById:(req,res)=>{
        ToDo.findOne({_id:req.params.id}).then((data)=>{
            res.json(data);
        });
    },
    search:(req,res,next)=>{
        let searchForText=ToDo.findOne({text:req.params.text});
        searchForText.then((todo)=>{
            if(!todo){
                console.log(todo);
                next({"msg":"text not found", code:404});
            }
            else{
                res.json(todo)
            }
        }).catch((err)=>{
            res.json(err);
        })},
    create:(req,res)=>{
        const newTask=new ToDo(req.body);
        newTask.save().then(()=>res.json({"msg":"Task created"}));
    },
    update:(req,res)=>{
        
        ToDo.updateOne({_id:req.params.id},{text:req.body.text,
            Tags:req.body.Tags}).then(()=>{res.json({"msg":"task updated"})
         })
    },
    delete:(req,res)=>{
        ToDo.deleteOne({_id:req.params.id}).then(()=>{
            res.json({"msg":"task deleted"})
        })
    }

}
