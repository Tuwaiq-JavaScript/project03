const Profile = require('../model/Profile');
const profile= require('../model/Profile');


module.exports={

     
// ****************find all profile  ****************
     index:(req,res)=>{
        profile.find({}).populate('User_id').then((data) => {
            res.json(data);
           });
     },


//*****************create profile********************  
    create:(req,res)=>{
         new profile(req.body)
         .save().then(() => res.json({"msg":" profile added"})); 
     },

//***************** update profile******************** 
    update:(req,res)=>{
        Profile.updateOne( {_id:req.body.id},{first_name:req.body.first_name}).then(()=>{
            res.json({"msg":" profile updated"});
        });
       
     },

     //************ profile deleted 

    delete:(req,res)=>{
        Profile.deleteOne({_id:req.body.id}).then(()=>{
            res.json({"msg":" profile deleted"});
        });
    }
}