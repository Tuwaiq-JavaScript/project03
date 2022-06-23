const router = require('express').Router()
const { verfiy } = require('../controllers/auth');
const { getProfile,postProfile,putProfile,deleteProfile } = require("../controllers/users");

router.use(verfiy)
router.get('/',getProfile)
router.post('/',postProfile)
router.put('/',putProfile)
router.delete('/',deleteProfile)

module.exports=router