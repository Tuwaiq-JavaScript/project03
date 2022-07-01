const mongoose = require('mongoose');
const todoSchema = mongoose.Schema({
    
    _id : Number,
    text: String,
    Tags: 
    [String],
        
    user_id:{
        type:mongoose.ObjectId,
        ref:'User'

    },
    is_complete : Boolean
  
},{timestamps:true});
module.exports = mongoose.model('Todo',todoSchema);

