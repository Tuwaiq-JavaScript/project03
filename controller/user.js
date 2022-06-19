const User = require('../model/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const mySecret = 'secret'

module.exports ={
 
    create:(req,res)=>{
        bcrypt.hash(req.body.password,10, function(err, hash) {
            User.create({
                username: req.body.username,
                email:req.body.email,
                password:hash
            })
            .then(()=>res.json({"msg":"user created"}));
        });
    },
    display:(req,res)=>{
        User.find({}).then(data=>res.json(data));
    },
    
   login:(req,res)=>{
        User.findOne({email:req.body.email}).then((user)=>{
            bcrypt.compare(req.body.password, user.password, function(err, result) {
                if(result){
                    let token = jwt.sign({username:user.username,id:user._id},mySecret);
                    res.json({"msg":"User logged in","token":token});
                }else{
                    res.json({"msg":"Invalid password or email"});
                }
            });
        });
     },

     verification:(req,res)=>{
        jwt.verify(req.body.token, mySecret, function(err, decoded) {
            if(decoded){
                res.json({"msg":`Hello ${decoded.username}`});
            }else{
                res.json({"msg":"invalid token"});
            }
          });
    }


};/*
       const newUser = new User({ 
            
            username: req.body.username,
            email:req.body.email,
            password: req.body.password
         }); 
        newUser.save().then(() => res.json({"msg":"user created"}));
     },
    
    
        const userLogin = new User({ 
            username: req.body.username,
            password: req.body.password
         }); 
        userLogin.save().then(() => res.json({"msg":"user created"}));*
     }}
     
     update: (req,res)=>{
        Cat.updateOne({_id:req.params.id},{name:req.body.name})
        .then(()=>{
            res.json({"msg":"Cat is update"});
        });  
    },
    delete:(req,res)=>{
        Cat.deleteOne({_id:req.params.id}).then(()=>{
            res.json({"msg":"Cat deleted!"});
        });
    }}
*/