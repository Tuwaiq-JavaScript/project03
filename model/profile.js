const mongoose = require('mongoose');
const mongoose = mongoose.Schema;

let profileSchema= new Schema({
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
module.exports = profileSchema;