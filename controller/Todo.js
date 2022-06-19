const ToDo = require('../model/Todo');
const {ObjectId}= require('bson');
//const bcrypt = require('bcrypt');



module.exports = {
//all tasks

    index:(req,res) =>{
        ToDo.find({}).then((data)=>{
         res.json(data);

        })  
    },


    indexOne:(req,res)=>{
        ToDo.find({_id: req.params.id}).populate('user_id').then((data)=>{
            res.json(data);
        })
    },

    create:(req,res)=>{

        ToDo.insertMany(req.body).then((data)=>{
                     res.json(data);
             
    
        /*const T = new ToDo ({
    
            text:req.body.text,
            is_complete: req.body.is_complete,
            Tags:req.body.Tags,
            user_id:req.age.user_id
    
        });*/
    
       // T.save().then(() => res.json({" msg":"added"}))
    });
    },

    update:(req,res)=> {

        ToDo.updateOne({_id:req.params._id},{text: req.body.text}).then(() =>{
            res.json("msg:ToDo is updated");
        }
    
    );

},

delete:(req,res) =>{

    ToDo.deleteOne({_id:req.params.id}).then((data)=>{
        res.json("msg: ToDo is deleted!");

    }
    );
}

}