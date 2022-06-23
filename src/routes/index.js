const router = require("express").Router();
const authRoutes = require('./auth')
const userRoutes = require('./users')
const todoRoutes = require('./todo');

router.use('/auth',authRoutes)
router.use('/profile',userRoutes)
router.use('/todo',todoRoutes)

module.exports= router