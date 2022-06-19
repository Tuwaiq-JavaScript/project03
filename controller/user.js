const users = require('../model/user');
const bcrypt= require('bcrypt');
const jwt = require('jsonwebtoken');

const express = require('express'); // express
const user = require('../model/user');
const app = express();


const saltRoundom = 10;

module.exports = {
    index:(req,res)=>{
      users.find({}).then((data) => {
            res.json(data);
           });
     },/////////////////////


     //post /login

     creatOne:(req,res)=>{
      users.findOne({username:req.body.username}).then((users)=>{

        bcrypt.compare(req.body.password,users.password,function(err,result){
          if (result){

            let token = jwt.sign({name: users.name,id:users._id},users.secret_key);
            res.json({"msg": "the user logged in","token":token});
          }else{
            res.json({"msg": "Invalid "});

          }
        });
      });


     },

     //post /register

     create:(req, res) => {
      bcrypt.hash(req.body.password,saltRoundom,function(err,hash){

        users.create({

          username:req.body.username,
          password: hash,
        })
        .then(()=> res.json({"msg": "user create"}))
      })
     } ,
    

     /*update: (req, res) => {
        users.updateOne(req.params.id, req.body).then((data) => {
          res.json(data);
        });
      },*/
    /* delete:(req,res)=>{
    
users.deleteOne(req.body).then((data) =>{

    res.json(data);
});
},*/



}














    


