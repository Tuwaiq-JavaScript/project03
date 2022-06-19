const task = require('../model/task')
module.exports={
    index:(req,res)=>{
        task.find({}).populate(user).then((data)=>{
                res.json(data)
            })
    },
    index1:(req,res)=>{
        task.findOne({_id : req.params.id}).then((data)=>{
                res.json(data)
            })
    },
    select:(req,res)=>{
        task.findOne({_id : req.params.id},{
            _id:0,
           Tags:1
        }).then((data)=>{
            res.json(data)
        })
    },
    create:(req,res)=>{
        const newtask= task(req.body);
        newtask.save().then(()=>res.json({"mes": "task created"}))
    },
    update:(req,res)=>{
        task.updateOne({_id : req.params.id},{name:req.body.name}).then(()=>{
            res.json({'mes' : "task updated"})
        })},
    delete:(req,res)=>{
        task.deleteOne({_id:req.params.id}).then(()=>{
            res.json({'mes':"task deleted"})
        })
    }
}