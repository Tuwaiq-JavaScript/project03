const mongoose = require('mongoose');
const usersSchema = mongoose.Schema({ 

  username:String,
  secret_key:String,
  password: {
    type:String,
    required:true
}

},
  /*  username:String,
  secret_key:String,
  password:String},*/
{
  timestamps: true,
}); 
module.exports = mongoose.model('Users',usersSchema);
