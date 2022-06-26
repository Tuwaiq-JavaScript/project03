const user = require('../model/User')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
const mySecret = 'secret'
const jwt = require('jsonwebtoken');



module.exports= {
    // create
   create: (req,res)=>{
        bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
            user.create({
                username:req.body.username,
                password:hash
                
            })
            .then(()=>res.json({"msg":"user created"}));
        });
    },
    userFind: (req,res)=>{
        user.find({}).then(data=>res.json(data));
    },
    delete:(req,res)=>{
        user.deleteOne(req.body)
        .then(()=> {
            res.json({"msg":"user deleted"})
        })
    },
    //  login
    post:(req,res)=>{
        user.findOne({email:req.body.email}).then((user)=>{
            bcrypt.compare(req.body.password, user.password, function(err, result) {
                if(result){
                    let token = jwt.sign({name:user.name,id:user._id},mySecret);
                    res.json({"msg":"User logged in","token":token});
                }else{
                    res.json({"msg":"Invalid password"});
                }
            });
        });
    } 
    }
    

    