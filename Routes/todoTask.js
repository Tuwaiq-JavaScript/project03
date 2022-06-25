const express = require("express")
const {
  addTodoTask,
  getTodoTask,
  getTodoTaskById,
  updateTodoTask,
  deleteTodoTask,
  getTodoTaskBySearch,
  getTodoTaskByTags,
} = require("../Controllers/ToDo_Task")

const todoRouter = express.Router()

todoRouter.post("/create", addTodoTask)
todoRouter.get("/", getTodoTask)
todoRouter.get("/:id", getTodoTaskById)
todoRouter.get("/search", getTodoTaskBySearch)
todoRouter.get("/Tags", getTodoTaskByTags)
todoRouter.put("/update/:id", updateTodoTask)
todoRouter.delete("/delete/:id", deleteTodoTask)

module.exports = todoRouter
