let toDo=require('../models/toDo');
const { ObjectId } = require('bson');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mySecret='secret'
module.exports={

    //get
    index:(req,res)=>{
        toDo.find({}).then((data)=>{
            res.json(data);
        });
    },
    
    indexone:(req,res)=>{
        toDo.findOne({_id:req.params._id}).then((data)=>{
                    res.json(data);}
                
      )},
   indexSearch:(req,res,next)=>{
    let promise=toDo.findOne({text:req.params.text});
    promise.then((todo)=>{
        if(!todo){
            console.log(todo);
            next({"messege":'this text can not found', code:404});
        }
        else{
            res.json(todo)
        }
    }).catch((err)=>{
        res.json(err);
    })

},
    

//post
create:(req,res)=>{
    const newToDo = new toDo({
        text:req.body.text,
        Tags: req.body.Tags,
        user_id:req.body.user_id,
        is_complete :req.body.is_complete
    })
    newToDo.save().then(()=>res.json({"msg":"new toDO created!"}));
},

//put jwt

update:(req,res)=>{

let token=jwt.sign({user_id:req.body.user_id},mySecret);
if(token){
//console.log(token);
toDo.updateOne({user_id:req.body.user_id},{text:req.body.text}).then(()=>{
    res.json({"msg":"your task updated"})
}
)}else{
        res.json({"msg":"invalid token"});
   
}

jwt.verify(req.body.token, mySecret, function(err, decoded) {
    if(decoded){
        res.json({"msg":`hello ${decoded.id} you can update your tasks!`});
    }else{
        res.json({"msg":"invalid token"});
    }
})
    //toDo.updateOne({user_id:req.body.user_id},).then(()=>{
            
},//)



delete:(req,res)=>{
    let token=jwt.sign({user_id:req.body.user_id},mySecret);
console.log(token);
jwt.verify(req.body.token, mySecret, function(err, decoded) {
    if(decoded){
        res.json({"msg":`hello ${decoded.id} you can delete any task you want!`});
    }else{
        res.json({"msg":"invalid token"});
    }
})


},

/*jwt.verify(req.body.token, mySecret, function(err, decoded) {
    if(decoded){
        res.json({"msg":`hello ${decoded.id} you can update your tasks!`});
    }else{
        res.json({"msg":"invalid token"});
    }
})*/

}




//put
/*update:(req,res)=>{

    toDo.updateOne({_id:req.params._id},{text:req.body.text},{Tags:req.body.Tags}).
    then(()=>{
        res.json({"msg":"text Updated"})
    })
},
//delete
delete:(req,res)=>{
    toDo.deleteOne({_id:req.params._id}).
    then(()=>{
        res.json({"msg":"text deleted!"})
    })
}*/



