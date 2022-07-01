const mongoose = require('mongoose');
const taskSchema = mongoose.Schema({
    text:String,
    Tags:[],
    userId:{
        type:mongoose.ObjectId,
        ref:'user',
        required:true
    },
    ls_complete:Boolean
},{timestamps:true});
module.exports = mongoose.model('task',taskSchema);