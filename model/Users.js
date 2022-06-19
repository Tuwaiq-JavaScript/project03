const mongoose = require('mongoose');


const userSchema = mongoose.Schema({  
    username:{
        type:String,
        unique:true,
        required:true
    },
    secret_key:Number,
    password: {
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    }
    
});
module.exports = mongoose.model('User', userSchema);