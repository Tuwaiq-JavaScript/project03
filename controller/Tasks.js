const Task = require('../model/Tasks');
const jwt = require('jsonwebtoken');
const mySecret = 'SWE';
module.exports = {
    index:(req,res)=>{
        Task.find({}).then((data) => {
            res.json(data);
           });
     },
    viewOne:(req,res)=>{
        Task.findOne({_id:req.params.id}).then((data) => {
            res.json(data);
           });
     },  
    create:(req,res)=>{
        const t = new Task(req.body);
         t.save().then(() => res.json({"msg":"Task added"})); 
     },
    update:(req,res)=>{
        jwt.verify(req.body.token, mySecret, function(err, decoded) {
            let a = decoded.id; 
        Task.updateOne({$and:[{_id:req.params.id},{user_id:a}]},{text:req.body.text}).then(()=>{
            res.json({"msg":"Task updated"});
        });
    });
     },
    search:(req,res)=>{
        console.log(req.query.text);
        Task.findOne({text:req.query.text}).then((data) => {
            res.json(data);
           });
     },
     searchTags:(req,res)=>{
        Task.find({Tags:req.query.tags}).then((data) => {
            res.json(data);
           });
     },
    delete:(req,res)=>{
        jwt.verify(req.body.token, mySecret, function(err, decoded) {
            let a = decoded.id; 
        Task.deleteOne({$and:[{_id:req.params.id},{user_id:a}]}).then(()=>{
            res.json({"msg":"Task deleted"});
        });});
     
    }
}