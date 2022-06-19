const mongoose = require('mongoose');
const {ObjectId}= require('bson');


const ProfileSchema = mongoose.Schema({

    first_name:String ,
      last_name: String,
      age:Number,
      updated_at: Date,
      created_at:Date,
      user_id:{
       type: mongoose.ObjectId,
       ref: "User"

      },

 
 },
 {timestamps: true});


 module.exports = mongoose.model('Profile', ProfileSchema)