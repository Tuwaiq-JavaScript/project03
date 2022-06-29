const mongoose = require('mongoose');
const User = require('./Users');


const profileSchema = mongoose.Schema({  
    first_name: String,
    last_name: String,
    age:Number,
    user_id:{
     type: mongoose.ObjectId,
     ref:User}
},
{timestamps: true });
module.exports = mongoose.model('Profile', profileSchema);