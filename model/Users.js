const mongoose = require('mongoose');
//user schema and model
const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password:String,
    secret_key:String,

    userID:{
        type:mongoose.ObjectId,
        ref:'User'
    }
});
module.exports = mongoose.model('User',userSchema);


