const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const pss = 'password'
const user = require('../model/user')
let token = jwt.sign({name:user.name,id:user._id},pss);
module.exports={
    create:(req,res)=>{
        bcrypt.hash(req.body.password, saltRounds, function(err, hash){

            const newuser= user({
                username:req.body.username,
                password:hash,
                secret_key : token
            })
            newuser.save().then(()=>res.json({"mes": "user created"}))
        })
    },
    login:(req,res)=>{
        user.findOne({username:req.body.username}).then((user)=>{
            bcrypt.compare(req.body.password, user.password, function(err, result) {
                if(result){
                    token
                    res.json({"msg":"User logged in","token":token});
                }else{
                    res.json({"msg":"Invalid password"});
                }
            });
        });
    }
}