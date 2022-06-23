const bcrypt = require("bcrypt");
const { v4: uuid } = require("uuid");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/users");
const saltRounds = 10;
const mySecret = "secret";

module.exports = {
  register: (req, res) => {
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
      UserModel.create({
        _id: uuid(),
        username: req.body.username,
        password: hash,
      }).then(() => res.json({ msg: "user created" }));
    });
  },
  login: (req, res) => {
    UserModel.findOne({ username: req.body.username }).then((user) => {
      bcrypt.compare(req.body.password, user.password, function (err, result) {
        if (result) {
          let token = jwt.sign({ _id: user._id }, mySecret);
          res.json({ msg: "User logged in", token: token });
        } else {
          res.json({ msg: "Invalid password" });
        }
      });
    });
  },
  verfiy:(req,res,next)=>{
    if(req.headers.token==undefined){
      res.status(400).json({'msg':"there's no token "})
    }
    jwt.verify(req.headers.token,mySecret,(err,decoded)=>{
      if(err){
        res.status(400).json({'msg':"the token is incorrect"})
      }
      res.locals.user_id=decoded._id
      next()
    })
  }
 
};
