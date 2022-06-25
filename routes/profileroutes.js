const router = require("express").Router();
const profilescontroller = require("../controller/profile");



//profile routes
//profile index
router.get("/", profilescontroller.index);
//profile create
router.post("/create", profilescontroller.create);
//profile update
router.put("/update", profilescontroller.update);
//profile delete
router.delete("/delete", profilescontroller.delete);
module.exports = router;