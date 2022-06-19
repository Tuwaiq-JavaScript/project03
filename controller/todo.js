const todo = require('../model/todo')


module.exports ={
    index:(req,res)=>{
        todo.find({}).then((data)=>{
            res.json(data);
        });
    },
    create:(req,res)=>{
        const name = new todo({ 
            text: req.body.text,
            tags: req.body.tags,
            is_complete:req.body.is_complete,
          
   
    

         }); 
         
        name.save().then(() => res.json({"msg":"todo created"}));
     },

   
     
     search:(req, res) => { 
        (req.query.body).then((data) => {
        res.json(data);

      });
    },
    toid:(req,res)=>{  
        todo.find({}).then((data)=>{
            res.json(data)
        })
    },
     update: (req,res)=>{
        todo.updateOne({_id:req.params.id},{name:req.body.name})
        .then(()=>{
            res.json({"msg":"todo is update"});
        });  
    },
    delete:(req,res)=>{
        todo.deleteOne({_id:req.params.id}).then(()=>{
            res.json({"msg":"todo deleted!"});
        });
    }

}