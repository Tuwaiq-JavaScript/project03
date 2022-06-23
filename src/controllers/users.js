const profileModel = require("../models/profile");
module.exports = {
  getProfile: (req, res) => {
    const req_id = res.locals.user_id;
    profileModel.find({ user_id: req_id }).then((data) => {
      res.json({ profile: data });
    });
  },
  postProfile: (req, res) => {
    profileModel.insertMany({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      age: req.body.age,
      user_id: res.locals.user_id,
    });
    res.json({ msg: "profile added" });
  },
  putProfile: async (req, res) => {
    await profileModel.findOneAndUpdate(
      { user_id: res.locals.user_id },
      req.body
    );
    res.json({ msg: "profile updated" });
  },
  deleteProfile: async (req, res) => {
    await profileModel.findOneAndDelete({ user_id: res.locals.user_id });
    res.json({ msg: "profile deleted" });
  },
};
