//get
// /profile

//post
// /profile

//put
// /profile

//delete
// /profile

const profile = require('../model/Profile')

module.exports={
    index:(req,res)=>{  
        profile.find({}).then((data)=>{
            res.json(data)
        })
    },
    create:(req,res)=>{
        profile.create(req.body).then ((data)=> {
            res.json("profile created")
        })
    },
    update:(req,res)=>{
        profile.updateOne(req.body)
        .then(()=> {res.json({"msg":"profile updated"})
        })
    },
    delete:(req,res)=>{
        profile.deleteOne(req.body)
        .then(()=> {
            res.json({"msg":"profile deleted"})
        })
    },
}