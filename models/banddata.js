const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var bandSchema = new Schema({
  band: {type: String, required: true},
  stage: {type: String, required: true},
  time: {type: String, required: true},
  day: {type: String, required: true},
  image: {type: String, required: true},
  url: {type: String, required: true},
  bio: {type: String, required: true},

});


// This creates our model from the above schema, using mongoose's model method
const Bands = mongoose.model("Bands", bandSchema);

// Export the Note model
module.exports = Bands;