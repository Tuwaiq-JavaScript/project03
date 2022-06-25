const mongoose = require("mongoose");
const profileschema = mongoose.Schema({
  firstname: String,
  lastname: String,
  age: Number,
  updated_at: { type: Date, default: Date.now },

  created_at: { type: Date, default: Date.now },
  user_id: {
    type: mongoose.ObjectId,
    ref: "User",
  },
});
module.exports= mongoose.model("profile", profileschema);
