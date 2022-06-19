const profile = require('../modles/profile');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
module.exports={
find:(req,res)=>{
    jwt.verify(req.body.token, mySecret, function(err, decoded) {
        if(decoded){
            profileModel.find({}).then(data=>res.json(data));
        }else{
            res.json({"msg":"invalid token"});
        }});

}
,
    create:(req,res)=>{
        profileModel.create(req.body).then(()=>res.json({"msg":"profile create"}));
    
    },
    update:(req,res)=>{
        jwt.verify(req.body.token, mySecret, function(err, decoded) {
            if(decoded){
                profileModel.updateOne(req.body)
                 .then(()=>res.json({"msg":"profile update"}));
            }else{
                res.json({"msg":"invalid token"});
            }});
    
    },
    delete:(req,res)=>{
        jwt.verify(req.body.token, mySecret, function(err, decoded) {
            if(decoded){
                profileModel.deleteOne(req.body)
                 .then(()=>res.json({"msg":"profile deleted"}));
            }else{
                res.json({"msg":"invalid token"});
            }});
    },
}
