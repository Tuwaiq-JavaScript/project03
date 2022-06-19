const router = require("express").Router();
const profilescontroller = require("../controller/profile");


//profile index
router.get("/", profilescontroller.index);
//profile create
router.post("/create", profilescontroller.create);
// update
router.put("/update", profilescontroller.update);
//delete
router.delete("/delete", profilescontroller.delete);


module.exports = router;