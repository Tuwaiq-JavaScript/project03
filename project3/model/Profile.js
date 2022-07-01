const mongoose = require('mongoose');
//*******************course  schema and model for profile********************* 


const profile = mongoose.Schema({
    
        first_name: String,
        last_name: String,
        age:Number,
       User_id:{
        type:mongoose.ObjectId,
        ref: 'Users'
    }
    
  
},{timestamps:true});

module.exports = mongoose.model('profile',profile);

