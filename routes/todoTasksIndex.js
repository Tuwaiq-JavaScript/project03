const router = require('express').Router()
const todotaskscontroller = require('../controllers/todoTasks')
const todotasksModel = require("../model/TodoTasks")

// //get
// /todo/

// //get
// /todo?search={text_to_search_for}

// //get
// /todo/:id

// //post
// /todo/

// //put
// /todo/:id

// //delete
// /todo/:id

module.exports = router

router.get('/todoTasks',todotaskscontroller.allTasks )

router.get('/todo?search=',todotaskscontroller.search )

router.get('/todo/:id',todotaskscontroller.oneTask )

router.post('/todo/create', todotaskscontroller.create)

router.delete('profile/delete/:id', todotaskscontroller.delete)

router.put('/todo/:id', todotaskscontroller.update)