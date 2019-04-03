const db = require("../models");

module.exports = {

  findById: function (req, res) {
    db.Users
      .findById({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAll: function (req, res) {
    db.Users
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));


  },
  userBands: function (req, res) {
    db.Users
      .find({ _id: req.params.id})
      .populate("userBands")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

  },

  findUserBand: function (req, res){
    let objectId = req.params.id
    let bandId= req.body.bandId
    db.Users
    .find({_id:objectId}, {userBands:bandId})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },

  // remove: function (req, res) {
  //   let objectId= req.params.id
  //   let bandId= req.body.bandId
  //   db.Users
  //     .find({_id:objectId},{$all:{userBands: bandId}})
  //     .then(dbModel => dbModel.remove())
  //     .catch(err => res.status(422).json(err));
  // }


}
