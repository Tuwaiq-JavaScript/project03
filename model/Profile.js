const mongoose = require('mongoose');

//cat schema and model
const profileSchema = mongoose.Schema({ 
    _id:Number,
    first_name: String,
    lsst_name: String,
    age:Number,

    userID:{
        type:mongoose.ObjectId,
        ref:'User'
    }
 },{timestamps:true});
 
module.exports = mongoose.model('Cat',profileSchema);//schema and model


