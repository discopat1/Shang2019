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
          .find({userBands:{}})
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      
    }, 

    // addUserBands: function(req,res){
    //   console.log("users controller ID", userId)
    //   let objectId =userId
    //   db.Users
    //     .findOneAndUpdate({objectId:objectId}, {$push:{userBands:dbBands._id} }, {new:true})
    //     .then(function(dbUser) {
    //       // If the User was updated successfully, send it back to the client
    //       res.json(dbUser);
    //     })
    //     .catch(function(err) {
    //       // If an error occurs, send it back to the client
    //       res.json(err);
    //     });
   
    // },
    remove: function(req, res) {
      (console.log("usersController ID",userId))
      db.Users
        .findById({ObjectId:userId})
        .findOneAndDelete({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .catch(err => res.status(422).json(err));
    }

    
}
