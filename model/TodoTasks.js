const mongoose = require("mongoose");
const { ObjectId } = require('bson');
var mySchema = new mongoose.Schema( {text: String}, {timestamps: true} );



const todoTasksSchema = mongoose.Schema ({
    
    text: String,
    updatedAt: Date,
    createdAt: Date,
    Tags: [
      String,String
    ],
    user_id:{
        type: ObjectId,
        ref: 'User'
    },
    is_complete : Boolean
},
{ timestamps: true })


module.exports = mongoose.model("TodoTasks", todoTasksSchema);