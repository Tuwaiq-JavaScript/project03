const mongoose = require('mongoose')
const userSchema=mongoose.Schema({
        username:
        {
            type:String,
           unique:true,
            required:true
          },
            //secret_key:{type:mongoose.ObjectId},
            password: String
    },{timestamps: true},
    );

module.exports = mongoose.model('user',userSchema)