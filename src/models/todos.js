const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const todoSchema = mongoose.Schema({
        "_id" : mongoose.ObjectId,
        "text": String,
        "tags": [String],
        "user_id":{
            type:String,
            ref:'User'
        },
        "is_complete" : Boolean
},{timestamps:true})
// todoSchema.plugin(AutoIncrement);

module.exports = mongoose.model('todos',todoSchema)