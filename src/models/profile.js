const mongoose = require("mongoose");

const profileSchema = mongoose.Schema(
  {
    _id: String,
    first_name: String,
    last_name: String,
    age: Number,
    user_id: {
      type: String,
      ref: "User",
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("profiles", profileSchema);
