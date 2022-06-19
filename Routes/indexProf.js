const router = require('express').Router();
const ProfController = require('../controller/Profile');
const Prof = require("../models/Profile")

router.get('/profile',ProfController.index);
//insert-create
router.post('/profile/create',ProfController.create);
//update
router.put('/profile/update',ProfController.update);
//Delete
router.delete('/profile/delete',ProfController.delete);


module.exports = router;