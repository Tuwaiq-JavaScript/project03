const router = require('express').Router();
const todotasksController = require('../controllers/TodoTasks');

router.post('/tasks/create',todotasksController.create);
router.get('/tasks',todotasksController.search);
router.get('/tasks',todotasksController.tags);

router.get('/tasks',todotasksController.find);
router.get('/tasks/:id',todotasksController.index);

router.put('/tasks/update/:id',todotasksController.update);

router.delete('/tasks/delete/:id',todotasksController.delete);


module.exports = router;