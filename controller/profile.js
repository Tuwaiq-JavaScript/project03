const Profile = require('../model/profile');
const {ObjectId}= require('bson');



module.exports={
    index:(req,res)=>{
        Profile.find({}).then((data)=>{
            res.json(data);
        })
    },

// create profile
create:(req,res)=>{

    const newProfile = new Profile ({

    first_name:req.body.first_name,
    last_name:req.body.last_name ,
      age:req.body.age,
      user_id:req.age.user_id

    });

    newProfile.save().then(() => res.json({" msg":"profile created"}))
  
},

// update profile 
update:(req,res)=>{
    Profile.updateOne({_id:req.body.id}).then(()=>{
        res.json({"msg":" Profile updated"});
    });
 },


delete:(req,res)=>{
    Profile.deleteOne({_id:req.body.id}).then(()=>{
        res.json({"msg":" Profile deleted"});
    });

}
}