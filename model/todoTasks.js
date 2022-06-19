const mongoose = require('mongoose');
const Users = require('./Users');
const todoTaskSchema = mongoose.Schema({ 

    text:String,
    Tags:[String],
    is_complete:Boolean,
    user_id:{
        type:mongoose.ObjectId,
        ref:Users
      }
      
},
{
  timestamps: true,
}); 

module.exports = mongoose.model('TodoTask',todoTaskSchema);