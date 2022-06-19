const Users = require('../model/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const mySecret = 'secret'

module.exports = {
     register:(req,res)=>{
      bcrypt.hash(req.body.password, saltRounds, function(err, hash){
        const u= new Users({ username:req.body.username, password:hash});
   
         u.save().then(() => res.json({"msg":" Users register"})); 
       
      });
  },
     login:(req,res)=>{
      
       Users.findOne({username:req.body.username}).then((user)=>{
        bcrypt.compare(req.body.password, user.password,function(err, result) {
          if(result){
            let token = jwt.sign({username:user.username,id:user._id},mySecret);
            res.json({"msg":"User logged in","token":token});
          }else{
            res.json({"msg":"Invalid password"});
        }
      });
       
    });
     }
}
