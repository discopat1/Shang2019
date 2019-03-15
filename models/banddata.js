var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var bandSchema = new Schema({
  band: String,
  stage: String, 
  time: String,
  day: String,
  image: String,
  url: String,
  bio: String,

});


// This creates our model from the above schema, using mongoose's model method
var Bands = mongoose.model("Bands", bandSchema);

// Export the Note model
module.exports = Bands;