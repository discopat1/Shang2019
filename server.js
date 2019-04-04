const express = require("express");
const path = require("path")
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");
const app = express();
const passport = require("passport");



//PORT
const PORT = process.env.PORT || 5000;

mongoose.set('useFindAndModify', false);
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());



//production mode
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  //
}



// Add routes, both API and view
app.use(routes);



// DB Config
// const db = require("./config/keys").mongoURI;
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/shangrila",{ useNewUrlParser:true})
.then(console.log("Connected to Mongodb"));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`) 
});