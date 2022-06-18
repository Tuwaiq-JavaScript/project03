const router = require('express').Router()
const profilecontroller = require('../controllers/profile')
const profileModel = require("../model/Profile")



module.exports = router


router.get('/profiles/',profilecontroller.index )

router.post('/profile/create', profilecontroller.create)

router.delete('/profile/delete/:id', profilecontroller.delete)

router.put('profile/update/:id', profilecontroller.update)