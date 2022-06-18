const profiles=require('../model/profile');
const users=require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
let mm;
module.exports = {
    index: (req, res) => {
      mm=req.body.secret_key;
      jwt.verify(req.body.token, mm, function(err, decoded) {
        if(decoded){
            res.json({"msg":`hello ${decoded.id}`});
        }else{
            res.json({"msg":"invalid token"});
        }

      });
    },
    create: (req, res) => {
        profiles.insertMany(req.body).then((data) => {
          profiles.save
      });
    },
    update: (req, res) => {
      mm=req.body.user_id;
        profiles.updateOne({mm}, req.body).then((data) => {
        res.json(data);
      });
    },
    delete: (req, res) => {
      mm=req.body.user_id;   
       profiles.deleteOne({mm})
      .then(()=>res.json({"msg":"user deleted"}));
       
      
    },
  };