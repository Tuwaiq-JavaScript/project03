const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username:String,
    secert_key:{
        type:mongoose.ObjectId,
        ref:'User'
    },
    password:String
});
module.exports = mongoose.model('User',userSchema);

