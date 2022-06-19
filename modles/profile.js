const mongoose = require('mongoose')
const profilrSchema=mongoose.Schema({
    first_name:String,
    last_name: String,
    age:Number,
    
   
    user_id:{
        type:mongoose.ObjectId,
        ref: 'user'
    },

},
{timestamps: true}
)

module.exports = mongoose.model('profile',profilrSchema)