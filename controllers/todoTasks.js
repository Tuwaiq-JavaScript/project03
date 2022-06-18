

const todo = require('../model/TodoTasks')
const querystring = require('querystring');
const bodyParser = require('body-parser');



module.exports={
    allTasks:(req,res)=>{  
        todo.find({}).then((data)=>{
            res.json(data)
        })
    },
    search:(req, res) => { 
        (req.query.body).then((data) => {
        res.json(data);

      });
    },
    oneTask:(req,res)=>{  
        todo.find({}).then((data)=>{
            res.json(data)
        })
    },
    
    create:(req,res)=>{
        todo.create(req.body).then ((data)=> {
            res.json("task created")
        })
    },
    update:(req,res)=>{
        todo.updateOne(req.body)
        .then(()=> {res.json({"msg":"task updated"})
        })
    },
    delete:(req,res)=>{
        profile.deleteOne(req.body)
        .then(()=> {
            res.json({"msg":"task deleted"})
        })
    }
}