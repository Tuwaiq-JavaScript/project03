const profile=require('../models/profile');
const { ObjectId } = require('bson');

module.exports={
    index:(req,res)=>{
        profile.find({}).then((data)=>{
            res.json(data)
        })
    },

    create:(req,res)=>{ 
        const newprofile=new profile({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            age:req.body.age,
            user_id:req.body.user_id,
        })
        newprofile.save().then(()=>res.json({"msg":"profile created!"}))
    },




        update:(req,res)=>{
            profile.updateOne({_id:req.params._id},
           { first_name:req.body.first_name,
            last_name:req.body.last_name,
            age:req.body.age})
            .then(()=>{
                res.json({"msg":"profile updated!"})
            })},
    
        delete:(req,res)=>{
            profile.deleteOne({_id:req.params._id}).then(()=>
            {
                res.json({"msg":"profile Deleted!"})
            })
        }
}