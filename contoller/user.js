const User = require('../model/user');


module.exports={
    create:(req,res)=>{
        //console.log(req.body);
        new User(req.body).save().then(()=>{
            res.json({"msg":"user created"})
        });
    }
}