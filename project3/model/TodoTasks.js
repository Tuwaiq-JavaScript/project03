const mongoose = require('mongoose');

//*******************course  schema and model for todotask********************* 


const TodoTasks = mongoose.Schema({
    
    text:String,
    Tags: [String],
    User_id:{
        type:mongoose.ObjectId,
        ref:'Users'},
    is_complete : Boolean,
           
},{timestamps:true});

module.exports = mongoose.model('TodoTasks',TodoTasks);








