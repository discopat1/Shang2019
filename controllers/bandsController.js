const db = require("../models");

// Defining methods for the bandsController
module.exports = {
  findAll: function(req, res) {
    db.Bands
      .find(req.query)
      .sort({ time: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findMain:function(req,res){
    db.Bands
    .find({stage:"Main"})
    .sort({ time: -1 })
    .then(dbModel=>res.json(dbModel))
    .catch(err=>res.status(422).json(err))
  },
  findMainFriday: function(req,res){
    db.Bands
    .find({stage:"Main", day:"Friday"})
    .sort({ time: -1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
 findMainSaturday: function(req,res){
   db.Bands
   .find({stage:"Main", day:"Saturday"})
   .sort({ time: -1 })
   .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
 },
 findMainSunday: function(req,res){
  db.Bands
  .find({stage:"Main", day:"Sunday"})
  .sort({ time: -1 })
  .then(dbModel => res.json(dbModel))
   .catch(err => res.status(422).json(err));
},
findSide:function(req,res){
  db.Bands
  .find({stage:"Side"})
  .sort({ time: -1 })
  .then(dbModel=>res.json(dbModel))
  .catch(err=>res.status(422).json(err))
},
findSideFriday: function(req,res){
  db.Bands
  .find({stage:"Side", day:"Friday"})
  .sort({ time: -1 })
  .then(dbModel => res.json(dbModel))
   .catch(err => res.status(422).json(err));
},
findSideSaturday: function(req,res){
  db.Bands
  .find({stage:"Side", day:"Saturday"})
  .sort({ time: -1 })
  .then(dbModel => res.json(dbModel))
   .catch(err => res.status(422).json(err));
},
findSideSunday: function(req,res){
  db.Bands
  .find({stage:"Side", day:"Sunday"})
  .sort({ time: -1 })
  .then(dbModel => res.json(dbModel))
   .catch(err => res.status(422).json(err));
},
findHarmonium:function(req,res){
  db.Bands
  .find({stage:"Harmonium"})
  .sort({ time: -1 })
  .then(dbModel=>res.json(dbModel))
  .catch(err=>res.status(422).json(err))
},
findHarmoniumFriday: function(req,res){
  db.Bands
  .find({stage:"Harmonium", day:"Friday"})
  .sort({ time: -1 })
  .then(dbModel => res.json(dbModel))
   .catch(err => res.status(422).json(err));
},
findHarmoniumSaturday: function(req,res){
  db.Bands
  .find({stage:"Harmonium", day:"Saturday"})
  .sort({ time: -1 })
  .then(dbModel => res.json(dbModel))
   .catch(err => res.status(422).json(err));
},
findHarmoniumSunday: function(req,res){
  db.Bands
  .find({stage:"Harmonium", day:"Sunday"})
  .sort({ time: -1 })
  .then(dbModel => res.json(dbModel))
   .catch(err => res.status(422).json(err));
},
findOm:function(req,res){
  db.Bands
  .find({stage:"Om Dome"})
  .sort({ time: -1 })
  .then(dbModel=>res.json(dbModel))
  .catch(err=>res.status(422).json(err))
},
findOmFriday: function(req,res){
  db.Bands
  .find({stage:"Om Dome", day:"Friday"})
  .sort({ time: -1 })
  .then(dbModel => res.json(dbModel))
   .catch(err => res.status(422).json(err));
},
findOmSaturday: function(req,res){
  db.Bands
  .find({stage:"Om Dome", day:"Saturday"})
  .sort({ time: -1 })
  .then(dbModel => res.json(dbModel))
   .catch(err => res.status(422).json(err));
},
findOmSunday: function(req,res){
  db.Bands
  .find({stage:"Om Dome", day:"Sunday"})
  .sort({ time: -1 })
  .then(dbModel => res.json(dbModel))
   .catch(err => res.status(422).json(err));
},
  findById: function(req, res) {
    db.Bands
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Bands
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Bands
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Bands
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
