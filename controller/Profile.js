const Profile = require('../model/Profile');
const jwt = require('jsonwebtoken');
const mySecret = 'SWE';

module.exports = {
    index:(req,res)=>{
        Profile.find({}).then((data) => {
            res.json(data);
           });
     },
    create:(req,res)=>{
        const p = new Profile(req.body);
         p.save().then(() => res.json({"msg":"profile added"})); 
     },
    update:(req,res)=>{
        jwt.verify(req.body.token, mySecret, function(err, decoded) {
            let a = decoded.id; 
        Profile.updateOne({$and:[{_id:req.body.id},{user_id:a}]},{first_name:req.body.first_name}).then(()=>{
            res.json({"msg":"Profile updated"});
        });}); 
    },
    delete:(req,res)=>{
        jwt.verify(req.body.token, mySecret, function(err, decoded) {
            let a = decoded.id; 
            console.log(a); 
        Profile.deleteOne({$and:[{_id:req.body.id},{user_id:a}]}).then(()=>{
            res.json({"msg":"Profile deleted"});
        });});
    }
}