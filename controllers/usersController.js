const db = require("../models");

module.exports = {

  findById: function(req, res) {
    db.Users
      .findById({_id:req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
    findAll: function(req, res) {
      db.Users
        .find({})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
        
        
    },
    userBands: function(req, res){
      db.Users
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      
    }, 
    remove: function(req, res) {
      (console.log("usersController ID",userId))
      db.Users
        .findById({ObjectId:userId})
        .findOneAndDelete({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .catch(err => res.status(422).json(err));
    }

    
}
