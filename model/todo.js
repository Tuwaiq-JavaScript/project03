const mongoose = require("mongoose");
const todoSchema = mongoose.Schema({
  text: String,
  updated_at: { type: Date, default: Date.now },

  created_at: { type: Date, default: Date.now },
  Tags: [String],
  user_id: {
    type: mongoose.ObjectId,
    ref: "User",
  },
  is_complete: { type: Boolean, default: false },
});
module.exports = mongoose.model("Todo", todoSchema);
