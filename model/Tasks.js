const mongoose = require('mongoose');
const User = require('./Users');


const taskSchema = mongoose.Schema({  
    text:String,
    Tags: [String],
    is_complete : Boolean,
    user_id:{
      type: mongoose.ObjectId,
      ref:User}
},
{timestamps: true });
module.exports = mongoose.model('Task', taskSchema);