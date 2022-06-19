const mongoose = require('mongoose');
const todoSchema = mongoose.Schema({
    
      
        
        text:
            String,
      

        tags
            :[String],
        
    
 
        user_id:{
         type: mongoose.Schema.Types.ObjectId,
             ref: 'User',
                },
        is_complete : 
            Boolean,
        

            }    ,{timestamps:true}
            )
  
module.exports = mongoose.model('Todo',todoSchema);