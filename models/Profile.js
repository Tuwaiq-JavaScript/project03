const mongoose = require('mongoose')
const Profileschema=mongoose.Schema(
    {
        first_name: String,
        last_name: String,
        age:Number,
        updated_at: Date,
        created_at:Date ,
        user_id:{
            type:mongoose.ObjectId,
            ref:"Users",
            require:true
        }  
    },
    {   
         timestamps: true,
    }
)
module.exports = mongoose.model('Prifile',Profileschema);//schema and model
