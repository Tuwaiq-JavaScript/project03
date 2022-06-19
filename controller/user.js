const user=require("../model/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports={
    bcrypt.hash(req.body.password,7, function(err, hash) {
        user.create({
            username: req.body.username,
            email:req.body.email,
            password:hash
        })
        .then(()=>res.json({"msg":"user created"}));
    }) 
}