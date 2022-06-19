const profileSchema = require ('./profileModel');
const mongoose = require('mongoose');
const mongoose = mongoose.Schema;
const bcrypt = require('bcrypt');
const user = require('../controller/user');

let userSchema =new Schema({
  username:{
    type:String,
    unique:true
  } ,
  password:{
    type: String ,
    minlength:[7,"minemum password length is 7"],
    require:true,
  },
})
userSchema.methods.matchPassword= async function(enterPassword){
    return await bcrypt.compare(enterPassword, this.password);
};

  module.exports = mongoose.model('user',userSchema);
  module.exports=user;