const mongoose = require("mongoose")

const todoTasksSchema = mongoose.Schema({
  text: String,
  updated_at: Date,
  created_at: {
    type: Date,
    default: Date.now,
  },
  Tags: [String],
  user_id: mongoose.ObjectId,
  is_complete: Boolean,
})

const todoTask = mongoose.model("todoTask", todoTasksSchema)

module.exports = todoTask
