const profile = require('../model/profile')
module.exports={
    index:(req,res)=>{
        profile.find({}).then((data)=>{
                res.json(data)
            })
    },
    create:(req,res)=>{
        const newprofile= profile(req.body);
        newprofile.save().then(()=>res.json({"mes": "profile created"}))
    },
    update:(req,res)=>{
        profile.updateOne({_id : req.params.id},{name:req.body.name}).then(()=>{
            res.json({'mes' : "profile updated"})
        })
    },
    delete:(req,res)=>{
        profile.deleteOne({_id : req.params.id}).then(()=>{
            res.json({'mes' : "profile deleted"})
        })
    }
}