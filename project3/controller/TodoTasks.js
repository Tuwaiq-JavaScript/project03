const { query } = require('express');
const TodoTasks= require('../model/TodoTasks');


module.exports={

// ****************find all tasks  ****************
     index:(req,res)=>{
        TodoTasks.find({}).populate('User_id').then((data) => {
            res.json(data);
           });
     },

    
// ****************find one  task by id   ****************
     indexOne:(req,res)=>{
        TodoTasks.find({_id:req.params.id}).populate('User_id').then((data) => {
            res.json(data);
           });
     },


//*****************search for text************************

indextwo:(req,res)=>{
     const text=req.query.text;
     //const tag= req.query.tag;
        res.json({ObjectId:text});
     
    
},


//*****************create new task********************  
    create:(req,res)=>{
         new TodoTasks(req.body)
         .save().then(() => res.json({"msg":" task added"})); 

     },

//***************** update  one task ******************** 
    update:(req,res)=>{
        TodoTasks.updateOne({text:req.body.text}).then(()=>{
            res.json({"msg":" task updated"});
        });
       
     },

     //************ deleted one task **************************

    delete:(req,res)=>{
        TodoTasks.deleteOne({_id:req.params.id}).then(()=>{
            res.json({"msg":" task deleted"});
        });
    }
}



