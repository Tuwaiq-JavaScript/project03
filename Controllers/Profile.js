const profile = require("../Models/Profile")

const getProfile = (req, res) => {
  profile.find().then(data => res.json(data))
}

 const addProfile = (req, res) => {
  profile
    .create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      age: req.body.age,
      updated_at: Date.now(),
      created_at: Date.now(),
      user_id: req.body.user_id,
    })
    .then(() => res.json({ msg: "profile created" }))
}


const updateProfile = (req, res) => {
  profile
    .findById(req.params._id)
    .updateOne({ _id: req.params.id }, req.body)
    .then(() => res.json({ msg: "profile updated" }))
}


const deleteProfile = (req, res) => {
  profile
    .findById(req.params._id)
    .deleteOne({ _id: req.params.id }, req.body)
    .then(() => res.json({ msg: "profile deleted " }))
}

module.exports = {getProfile, addProfile, updateProfile,deleteProfile}
