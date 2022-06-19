const router = require("express").Router();
const todoscontroller = require("../controller/Todo");


router.get("/", todoscontroller.index);

// create
router.post("/create", todoscontroller.create);
// update
router.put("/update/:id", todoscontroller.update);
// delete
router.delete("/delete/:id", todoscontroller.delete);

//todo index
module.exports = router;