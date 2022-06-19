const mongoose = require('mongoose')
const tasksSchema=mongoose.Schema({
    
   
    text: String,
    Tags: [String ],
    complete :Boolean,
    user_id:{
        type:mongoose.ObjectId,
        ref: 'user'
    },
    },
    {timestamps: true}
)
   


module.exports = mongoose.model('tasks',tasksSchema); 