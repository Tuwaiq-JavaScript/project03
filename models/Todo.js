const mongoose = require('mongoose')
const Todoschema=mongoose.Schema(
{
    text: String,
    updated_at: Date,
    created_at: Date,
    Tags: [String],
    user_id:{
        type:mongoose.ObjectId,
        ref:"Users"
    },
    is_complete : Boolean
},
{
    timestamps: true,
}
)
module.exports = mongoose.model('Todo',Todoschema);//schema and model
