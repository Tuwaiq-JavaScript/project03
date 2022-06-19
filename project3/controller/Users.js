const Users= require('../model/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
const saltRounds = 10;



module.exports={
   
//***************** login******************** 
createOne:(req,res)=>{
  Users.findOne({username:req.body.username}).then((Users)=>{
    bcrypt.compare(req.body.password, Users.password, function(err, result) {
        if(result){
            let token = jwt.sign({name:Users.name,id:Users._id},Users.secret_key);
            res.json({"msg":"User logged in","token":token});
        }else{
            res.json({"msg":"Invalid password"});
        }
  
      });
    });
  },


//******************Registered*******************  


create: (req, res) => {

  bcrypt.hash(req.body.secret_key, saltRounds, function(err, hash1) {
  bcrypt.hash(req.body.password, saltRounds, function(err, hash2)
  {
    Users.create({
      username:req.body.username,
      secret_key:hash1,
        password:hash2
    })
    .then(()=>res.json({"msg":" new user created"}));
});
});

}

}