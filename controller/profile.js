const profile=require('../model/profile');
const user =require('../model/user');
module.exports={
    index:(req,res)=>{
        profile.find({}).then((data)=>{
            res.json(data);
        });
    },
    creat:(req,res)=>{
        const newProfile=new profile({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            age:req.body.age,
            user_id:req.body.user_id
        });
        newProfile.save().then(()=>res.json({"msq":"profile creat"}));
    },
    update:(req,res)=>{
        profile.updateOne({_id:req.params.id},{
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            age:req.body.age,})
        .then(()=>{
            res.json({"msg":"profile is updated"});
        });
    },
    delete:(req,res)=>{
profile.deleteOne({_id:req.params.id}).then(()=>{
res.json({"msg":"profile is delete"});
});
    }
}