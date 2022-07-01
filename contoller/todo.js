const Todo = require('../model/todo')
module.exports ={
    index:(req,res)=>{
        Todo.find({}).then((data)=>{
            res.json(data);
        }).catch(()=>{
            res.send(403,"You do not have rights to visit this page");

        });
    },
    create:(req,res)=>{
        console.log(req.body)
        const tod = new Todo(req.body); 
        tod.save().then(() => res.json({"msg":"Todo created"})).catch(()=>{
            res.send(403,"You do not have rights to visit this page");

        });
     },
     update: (req,res)=>{
        Todo.updateOne({_id:req.params.id},{text:req.body.text})
        .then(()=>{
            res.json({"msg":"Todo is update"});
        }).catch(()=>{
            res.send(403,"You do not have rights to visit this page");

        });  
    },
    delete:(req,res)=>{
        Todo.deleteOne(req.params).then(()=>{
            res.json({"msg":"Todo deleted!"});
        }).catch(()=>{
            res.send(403,"You do not have rights to visit this page");

        });
    }

}