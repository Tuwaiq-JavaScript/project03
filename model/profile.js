const { ObjectId } = require('bson');
const mongoose = require('mongoose');

//cat schema and model
const profileSchema = mongoose.Schema({ 
    
        first_name:String,
        last_name:String,
        age:Number,
        user_id:{
            type:mongoose.ObjectId,
            ref:'User'
        },
        updated_at:Date,
        created_at: Date
},{timestamps:true});
    
 
module.exports = mongoose.model('Profile',profileSchema);//schema and model