const mongoose=require('mongoose');
const { ObjectId } = require('bson');

const profileSchema =mongoose.Schema(

{
    first_name: String,
    last_name: String,
    age:Number,
    updated_at: Date,
    created_at: Date,
    user_id:{
        type:mongoose.ObjectId,
        ref:'User'
    },
},{timestamp:true})

module.exports=mongoose.model('profile',profileSchema);