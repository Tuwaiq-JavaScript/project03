const todoModel = require("../models/todos");
module.exports = {
  getTodo: (req, res) => {
    const req_id = res.locals.user_id;
    const search = req.query.search;
    if (search) {
      todoModel.find({ user_id: req_id }).then((data) => {
        const filteredData = data.filter((todo) => todo.text.includes(search));
        res.json({ msg: filteredData });
      });
    } else {
      todoModel.find({ user_id: req_id }).then((data) => {
        res.json({ todos: data });
      });
    }
  },
  getTodoById: (req, res) => {
    const req_id = res.locals.user_id;
    todoModel.find({ user_id: req_id, _id: req.params.id }).then((data) => {
      res.json({ todos: data });
    });
  },
  postTodo: (req, res) => {
    todoModel.insertMany({
      text: req.body.text,
      tags: req.body.tags,
      user_id: res.locals.user_id,
      is_complete: false,
    });
    res.json({ msg: "task added" });
  },
  putTodo: (req, res) => {
    todoModel.findById({ _id: req.params.id }).then(async (data) => {
      if (data.user_id == res.locals.user_id) {
        await todoModel.findByIdAndUpdate(req.params.id, req.body);
        res.json({ msg: "task updated" });
      } else {
        res.status(403).json({ msg: "unauthorized access" });
      }
    });
  },
  deleteTodo: (req, res) => {
    todoModel.findById({ _id: req.params.id }).then(async (data) => {
      if (data.user_id == res.locals.user_id) {
        await todoModel.findByIdAndDelete(req.params.id);
        res.json({ msg: "task deleted" });
      } else {
        res.status(403).json({ msg: "unauthorized access" });
      }
    });
  },
};
