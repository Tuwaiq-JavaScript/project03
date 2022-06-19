const Profile = require('../model/profile');

module.exports = {
    index:(req,res)=>{
       Profile.find({}).then((data) => {
            res.json(data);
           });
     },
    create:(req,res)=>{
        const p= new Profile(req.body);
         p.save().then(() => res.json({"msg":" Profile added"})); 
       
     },
    update:(req,res)=>{
        Profile.updateOne({_id:req.body.id},{first_name:req.body.first_name}).then(()=>{
            res.json({"msg":" Profile updated"});
        });
     },
    delete:(req,res)=>{
        Profile.deleteOne({_id:req.body.id}).then(()=>{
            res.json({"msg":" Profile deleted"});
        });
    }
}
