const todotasks= require('../modles/todoTasks');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

module.exports={
   find:(req,res)=>{jwt.verify(req.body.token, mySecret, function(err, decoded) {
    if(decoded){
    tasksModel.find({}).then(data=>res.json(data));
}else{
    res.json({"msg":"invalid token"});
}});
},
index:(req,res)=>{
    jwt.verify(req.body.token, mySecret, function(err, decoded) {
        if(decoded){
    tasksModel.findOne({_id:req.params.id}).then(data=>res.json(data));
}else{
    res.json({"msg":"invalid token"});
}});
},
    create:(req,res)=>{   
        tasksModel.create(req.body) .then(()=>res.json({"msg":"tasks created"})); 
    },
    update:(req,res)=>{
        jwt.verify(req.body.token, mySecret, function(err, decoded) {
            if(decoded){
        tasksModel.updateOne({_id:req.params.id})
        .then(()=>res.json({"msg":"tasks updated"}));
    }else{
        res.json({"msg":"invalid token"});
    }});
    },
    delete:(req,res)=>{
        jwt.verify(req.body.token, mySecret, function(err, decoded) {
            if(decoded){
        tasksModel.deleteOne({_id:req.params.id})
        .then(()=>res.json({"msg":"tasks deleted"}));
    }else{
        res.json({"msg":"invalid token"});
    }});
    },
    search:(req,res)=>{
        let queryparamter =req.query;
        console.log(req.query.search);
        res.json(queryparamter);
      }
    ,
    tags:(req,res)=>{
        let queryparamter =req.query;
        console.log(req.query.tags);
        res.json(queryparamter);
      } 
       // or 
      //   router.get('/tasks',(req,res)=>{
      //     let queryparamter =req.query;
      //     console.log(req.query);
      //     res.json(queryparamter);
      //   });
}
    

