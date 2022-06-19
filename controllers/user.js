const User = require('../modles/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const mySecret = 'secret'

module.exports={
    find:(req,res)=>(req,res)=>{
        UserModel.findOne({username:req.body.username}).then((user)=>{
       bcrypt.compare(req.body.password, user.password, function(err, result) {
       if(result){
       let token = jwt.sign({username:user.username,id:user._id},mySecret);
       res.json({"msg":"User logged in","token":token});
        }else{
       res.json({"msg":"Invalid password"});
        }
       });
       });
       },
    create:(req,res)=>{
        bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        UserModel.create({
                    username:req.body.username,
                    password:hash
                })
        .then(()=>res.json({"msg":"user created"}));
         });
        },
    verify:(req,res)=>{
        jwt.verify(req.body.token, mySecret, function(err, decoded) {
        if(decoded){
         res.json({"msg":`hello ${decoded.id}`});
        }else{
        res.json({"msg":"invalid token"});
        }
        });
        }
}  

