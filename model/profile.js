const mongoose = require('mongoose');
//user schema and model
const profileSchema = mongoose.Schema({
    

    first_name:{

    type: String,
    },
    last_name:{
        type: String,
    },
    age:{
        type:Number,
    },
    
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
               },
   
}    ,{timestamps:true}
);
module.exports = mongoose.model('Profile',profileSchema);