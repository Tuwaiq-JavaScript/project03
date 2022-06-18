const router = require("express").Router();
const todoscontroller = require("../controller/todo");

//todo routes
router.get("/", todoscontroller.index);
//todo search
router.get("/search", todoscontroller.search);
//todo get by id
router.get("/:id", todoscontroller.getById);
//todo create
router.post("/create", todoscontroller.create);
//todo update
router.put("/update/:id", todoscontroller.update);
//todo delete
router.delete("/delete/:id", todoscontroller.delete);


//todo index
module.exports = router;
