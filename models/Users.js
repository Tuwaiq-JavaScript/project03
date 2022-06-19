const mongoose = require('mongoose')
const Userschema=mongoose.Schema(
{
    username: String,
    secret_key:{
        type:mongoose.ObjectId,
        ref: "Users"
    },
    password:{
        type:String,
        require:true
    }
}
)
module.exports = mongoose.model('User',Userschema);//schema and model
