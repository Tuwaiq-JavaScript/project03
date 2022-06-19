const TodoTask = require("../Models/ToDo_Task")

const addTodoTask = (req, res) => {
  TodoTask.create({
    text: req.body.text,
    updated_at: Date.now(),
    Tags: req.body.Tags,
    user_id: req.body.user_id,
    is_complete: req.body.is_complete,
  }).then(() => res.json({ msg: "Todo task created" }))
}

const getTodoTask = (req, res) => {
  TodoTask.find({}).then(data => res.json(data))
}

const getTodoTaskById = (req, res) => {
  TodoTask.findById(req.params.id).then(data => res.json(data))
}

const getTodoTaskBySearch = async (req, res) => {
  // const q = req.query
  //   return console.log(req.query)
  const search = req.query.search
  const result = await TodoTask.findOne({ text: search })
  res.json(result)
}

const getTodoTaskByTags = async (req, res) => {
  // const q = req.query
  //   return console.log(req.query)
  const Tags = req.query.Tags
  const result = await TodoTask.findOne({ Tags: Tags })
  res.json(result)
}

const updateTodoTask = (req, res) => {
  TodoTask.findById(req.params._id)
    .updateOne({ _id: req.params.id }, req.body)
    .then(() => res.json({ msg: "profile updated" }))
}

const deleteTodoTask = (req, res) => {
  TodoTask.findByIdAndDelete(req.params.id).then(() => res.json({ msg: "profile deleted " }))
}

module.exports = {
  addTodoTask,
  getTodoTask,
  getTodoTaskById,
  updateTodoTask,
  deleteTodoTask,
  getTodoTaskBySearch,
  getTodoTaskByTags,
}
