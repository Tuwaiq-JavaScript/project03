const mongoose = require('mongoose');
const {ObjectId}= require('bson');


const TodoSchema = mongoose.Schema({


   // _id:Number,
      text:String,
      updated_at: Date,
      created_at: Date,
      Tags: [String],
      user_id:{
        type:mongoose.ObjectId,
        ref:"User",
      }
      ,
      is_complete : Boolean



},
{timestamps: true


});
module.exports = mongoose.model('Todo', TodoSchema)