const Useres = require('../models/Users')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
const mySecret = 20;
const jwt =require('jsonwebtoken');
module.exports ={
    index:(req,res)=>{
        Useres.findOne({username:req.body.username}).then((user)=>{
            bcrypt.compare(req.body.password, Useres.password, function(err, result) {
                if(result){
                    let token = jwt.sign({username:Useres.username},mySecret);
                    res.json({"msg":"your logged in is succeed^_^"});
                }else{
                    res.json({"msg":"Invalid login -_-"});
                }
            });
        });
       },
    post:(req,res)=>{
        bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
             Useres.create({
                username:req.body.username,
                password:hash
            }).then(()=>res.json({"msg":"user created>o<"}));
        });
    } 
}