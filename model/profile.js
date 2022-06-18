const mongoose = require('mongoose');
const profileSchema = mongoose.Schema({
    
        _id : Number,
        first_name: String,
        last_name: String,
        age:Number,
        user_id:{
            type:mongoose.ObjectId,
            ref:'User'
        },
  
},{timestamps:true});
module.exports = mongoose.model('Profile',profileSchema);

