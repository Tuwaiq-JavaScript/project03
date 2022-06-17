const todos=require('../model/todo');

 module.exports = {
    index: (req, res) => {
        todos.find({}).then((data) => {
        res.json(data);
      });
    },
    //still need to add the search function
    search: (req, res) => { 
        let qurparam=req.query.text;
        todos.find({text:qurparam}).then((data) => {
        res.json(data);
        
      });
    },
    getById: (req, res) => {
        todos.findById(req.params.id).then((data) => {
        res.json(data);
      });
    },
    //post
    create: (req, res) => {
        todos.insertMany(req.body).then((data) => {
            res.json(data);
            });
        },
        //update by id and req.body is the new data to update 
        update: (req, res) => {
            todos.updateOne({_id:req.params.id},req.body).then(() => {
            res.json("msg: updated");
            }
            );
        },
        //delete by id
        delete: (req, res) => {
            todos.deleteOne({_id:req.params.id}).then((data) => {
            res.json("msg: deleted");
            }
            );
        }
        

}