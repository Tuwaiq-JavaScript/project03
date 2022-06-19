const Profile=require('../model/profile');
const User=require('../model/user');
module.exports ={
    index:(req,res)=>{
        Profile.find({}).then((data)=>{
            res.json(data);
        });
    },
    create:(req,res)=>{
        const newProfile= new Profile({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        age:req.body.age,
        user_id:req.body.user_id
         }); 
        newProfile.save().then(() => res.json({"msg":"Profile created"}));
     },
     update: (req,res)=>{
        Profile.updateOne({_id:req.params.id},{ 
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            age:req.body.age,})
        .then(()=>{
            res.json({"msg":"Profile is updated successfully!"});
        });  
    },
    delete:(req,res)=>{
        Profile.deleteOne({_id:req.params.id}).then(()=>{
            res.json({"msg":"Profile is deleted!"});
        });
    }
}