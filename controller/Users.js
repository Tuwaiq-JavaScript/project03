const User = require('../model/Users');
const bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');
const saltRounds = 10;
const mySecret = 'SWE';


module.exports = {
    login:(req,res)=>{
      User.findOne({username:req.body.username}).then((user)=>{
         bcrypt.compare(req.body.password, user.password, function(err, result) {
             if(result){
                 let token = jwt.sign({role:user.role,id:user._id},mySecret);
                 res.json({"msg":"User logged in","token":token});
             }else{
                 res.json({"msg":"Invalid password"});
             }
         });
     });
      },
     register:(req,res)=>{
        bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
      User.create({
        username: req.body.username,
        secret_key: Math.floor(Math.random() * 100),
        password: hash,
        role: req.body.role
        })
      .then(() => res.json({"msg":"Successful Registration"})); 
     });
    }
}