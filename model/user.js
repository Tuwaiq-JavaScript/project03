const mongoose = require('mongoose');

//cat schema and model
const userSchema = mongoose.Schema({ 
    username:String,
    email:{
        type:String,
        unique:true,
        required:true
    },
    //secretKey:
    password: {
        type:String,
        required:true
    }
});
    
 
module.exports = mongoose.model('User',userSchema);//schema and model