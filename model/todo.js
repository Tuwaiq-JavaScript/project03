const mongoose = require('mongoose');

//cat schema and model
const todoSchema = mongoose.Schema({ 
    _id: Number,
    text:String,
    tags:String,
    is_cpmplete:Boolean,
    userID:{
        type:mongoose.ObjectId,
        ref:'User'
    }
 },{timestamps:true});
 
module.exports = mongoose.model('todo',todoSchema);//schema and model

