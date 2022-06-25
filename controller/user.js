const users = require("../model/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

module.exports = {
  index: (req, res) => {
    users.find({}).then((data) => {
      res.json(data);
    });
  },
  create: (req, res) => {
    
    
    bcrypt.hash(req.body.password, saltRounds, function(err, hash1)
    {
      users.create({
        username:req.body.username,
        secret_key:req.body.secret_key,
          password:hash1
      })
      .then(()=>res.json({"msg":"user created"}));
  });

  },
  login: (req, res) => {
    users.findOne({username:req.body.username}).then((user)=>{
    bcrypt.compare(req.body.password, user.password, function(err, result) {
        if(result){
            let token = jwt.sign({name:user.name,id:user._id},user.secret_key);
            res.json({"msg":"User logged in","token":token});
        }else{
            res.json({"msg":"Invalid password"});
        }
    });
});},
  update: (req, res) => {
    users.updateOne(req.params.id, req.body).then((data) => {
      res.json(data);
    });
  },
  delete: (req, res) => {
    users.deleteone(req.body).then((data) => {
      res.json(data);
    });
  },
};
