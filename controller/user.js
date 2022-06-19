const user = require('../model/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
const saltRounds = 10;




module.exports={

    login:(req,res)=>{
      user.findOne({name:req.body.name}).then((user)=>{
        bcrypt.compare(req.body.password, user.password, function(err, result) {
            if(result){
                let token = jwt.sign({name:user.name,id:user._id},user.secret_key);
                res.json({"msg":"User logged in","token":token});
            }else{
                res.json({"msg":"Invalid password"});
            }
    
          });
        });
      },
    
    
    
      create: (req, res) => {

        bcrypt.hash(req.body.secret_key, saltRounds, function(err, hash1) {
        bcrypt.hash(req.body.password, saltRounds, function(err, hash2)
        {
          user.create({
            user:req.body.user,
            secret_key:hash1,
              password:hash2
          })
          .then(()=>res.json({"msg":" new user created"}));
      });
      });
      
      }
      
      } 