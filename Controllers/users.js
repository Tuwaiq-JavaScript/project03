const User=require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const secretKey='1122';
//app.use(express.json());
module.exports={
        create:(req,res)=>{      
             bcrypt.hash(req.body.password,saltRounds,function(err,hash){
                User.create({
                    userName:req.body.userName,
                    email:req.body.email,
                    password:hash
                })
                .then(()=>res.json({"msg":"user is created!"}))
             })
                        },

        


       login:(req,res)=>{
        User.findOne({email:req.body.email}).then((user)=>{
            bcrypt.compare(req.body.password, user.password,function(err,result){
                if(result){
                    let token=jwt.sign({userName:user.userName,id:user._id},secretKey);
                    res.json({"msg":"user logged in","token":token})
                }else{
                    res.json({"msg":"Invalid password"})
                }
            })
        })},
         verify:(req,res)=>{jwt.verify(req.body.token,secretKey,function(err,decoded)
            {

                if(decoded){
                    res.json({"msg":`hello ${decoded.id}`});
                }else{
                    res.json({"msg":"invalid token"});
                }
            })}}
