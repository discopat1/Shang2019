// Dependencies
var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

//Scraping tools
var axios = require("axios");


//Requiring the models:
var db = require("./models");

var PORT = process.env.PORT || 3001;
// Initialize Express
var app = express();


//Configure middleware:

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));



let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/shangriLa"; 

mongoose.connect(MONGODB_URI, { useNewUrlParser: true}).catch(err => {console.log(err)});




// Listen on port 3000
app.listen(PORT, function () {
  console.log("App running on port 3001!");
});