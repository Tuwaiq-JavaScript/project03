

const mongoose = require('mongoose');
//user schema and model
const userSchema = mongoose.Schema({

   
    name:{
        type: String,
    },
    secret_key: 
        {
          type: String
        },
      
 
    password:{

        type:String,
    },
   
});


module.exports = mongoose.model('User',userSchema);