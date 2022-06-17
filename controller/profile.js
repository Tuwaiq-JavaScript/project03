const profiles=require('../model/profile');
module.exports = {
    index: (req, res) => {
        profiles.find({}).then((data) => {
        res.json(data);
      });
    },
    create: (req, res) => {
        //maype arrays
        profiles.insertMany(req.body).then((data) => {
          profiles.save
      });
    },
    update: (req, res) => {
        profiles.updateOne(req.params._id, req.body).then((data) => {
        res.json(data);
      });
    },
    delete: (req, res) => {
        profiles.deleteone(req.body).then((data) => {
        res.json(data);
      });
    },
  };