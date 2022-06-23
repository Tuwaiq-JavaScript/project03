const { verfiy } = require("../controllers/auth");
const { getTodo, getTodoById, postTodo, putTodo, deleteTodo } = require("../controllers/todo");

const router = require("express").Router();

router.use(verfiy)
router.get("/", getTodo);
router.get("/:id", getTodoById);
router.post('/',postTodo)
router.put('/:id',putTodo)
router.delete('/:id',deleteTodo)

module.exports = router;
