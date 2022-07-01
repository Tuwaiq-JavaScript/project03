const mongoose = require('mongoose');
const profileSchema = mongoose.Schema({
    first_name:String,
    last_name:String,
    age:Number,
    userId: {
        type:mongoose.ObjectId,
        ref:'user',
        required:true
    }
},{timestamps:true});
module.exports = mongoose.model('profile',profileSchema);