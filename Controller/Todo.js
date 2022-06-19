const Todo = require('../models/Todo')
module.exports ={
    index:(req,res)=>{  
        Todo.find({}).then((data)=>{
            res.json(data)
        })},
    indextxt:(req,res)=>{
        Todo.find({}).then((data)=>{
            res.json(data);
        });
    },
    indexId:(req,res)=>{  
        Todo.find({}).then((data)=>{
            res.json(data)
        })
    },
    create:(req,res)=>{
        Todo.create(req.body).then ((data)=> {
            res.json({"msg":"one Todo is created ^v^"})
        })
     },
     update: (req,res)=>{
        Todo.updateOne(req.body).then(()=>{
            res.json({"msg":"one Todo is update>o<"});
        });  
    },
    delete:(req,res)=>{
        Todo.deleteOne(req.body).then(()=>{
            res.json({"msg":"one Todo is deleted -_-"});
        });
    }
}
