const mongoose= require ('mongoose');
const users = require('./users');
const { ObjectId } = require('bson');

const toDoSchema=mongoose.Schema(

{
 
    text:String,
   updated_at: Date,
   created_at: Date,
    Tags: [String],
    user_id:{type:mongoose.ObjectId,
        ref:'User'},
    is_complete :Boolean
},{timestamps:true})

module.exports=mongoose.model('toDo',toDoSchema);