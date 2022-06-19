const router = require('express').Router();
const todoController = require('../controller/todo');


//todo routes
router.get("/todo", todoController.index);
//todo search
router.get("/todo/search", todoController.search);
//todo get by id
router.get("/todo/:id", todoController.toid);
//todo create
router.post("/todo", todoController.create);
//todo update
router.put("/todo/update/:id", todoController.update);
//todo delete
router.delete("/todo/delete/:id", todoController.delete);


module.exports = router;