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
    let bandId= req.params.bandId
    db.Users
    .find({_id:objectId}, {$all:{userBands:bandId}})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },

  addBand: function(req, res){
    (console.log(req.params.id));
    (console.log(req.params.bandId))
      let objectId = req.params.id
      let bandId= req.params.bandId
   
      User
        .findOneAndUpdate({_id: objectId}, {$push:{userBands: bandId} }, {new:true})
        .then(function(dbUser) {
          // If the User was updated successfully, send it back to the client
          res.json(dbUser);
        })
        .catch(function(err) {
          // If an error occurs, send it back to the client
          res.json(err);
        });
   
    },
  remove: function (req, res) {
    let objectId= req.params.id
    let bandId= req.params.bandId
    console.log(req.params);
    db.Users
      .find({_id:objectId})
      .then(user => {
        user[0].userBands.splice(user[0].userBands.indexOf(bandId), 1);
        db.Users.findOneAndUpdate({_id: objectId}, {$set:{userBands: user[0].userBands} })
        .then(function(dbUser) {
          // If the User was updated successfully, send it back to the client
          res.json(dbUser);
        });
      }
      );
        /*,{userBands:{$eq:{bandId}}})
      .then(dbModel => dbModel.remove())
      .catch(err => res.status(422).json(err));*/
  }


}
