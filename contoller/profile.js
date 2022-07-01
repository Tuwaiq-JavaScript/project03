const Profile = require('../model/profile')
module.exports ={
    index:(req,res)=>{
        Profile.find({}).then((data)=>{
            res.json(data);
        }).catch(()=>{
            res.send(403,"You do not have rights to visit this page");

        });
    },
    create:(req,res)=>{
        const Pr = new Profile(req.body); 
        Pr.save().then(() => res.json({"msg":"Profile created"})).catch(()=>{
            res.send(403,"You do not have rights to visit this page");

        });
     },
     update: (req,res)=>{
        Profile.updateOne(req.body)
        .then(()=>{
            res.json({"msg":"Profile is update"});
        }).catch(()=>{
            res.send(403,"You do not have rights to visit this page");

        });  
    },
    delete:(req,res)=>{
        Profile.deleteOne(req.body).then(()=>{
            res.json({"msg":"Profile deleted!"});
        }).catch(()=>{
            res.send(403,"You do not have rights to visit this page");

        });
    }

}