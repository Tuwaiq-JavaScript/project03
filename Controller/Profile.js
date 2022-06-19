const Prof = require('../models/Profile')
const { update } = require('./Todo')
module.exports ={
    index:(req,res)=>{  
        Prof.find({}).then((data)=>{
            res.json(data)
        })
    },
    create:(req,res)=>{
        Prof.create(req.body).then ((data)=> {
            res.json("Profile is created ^v^")
        })
    },
    update:(req,res)=>{
        Prof.updateOne(req.body)
        .then(()=> {res.json({"msg":"Profile is updated>o<"})
        })
    },
    delete:(req,res)=>{
        Prof.deleteOne(req.body)
        .then(()=> {
            res.json({"msg":"Profile is deleted -_-"})
        })
    }
}