const express = require("express");
const path = require ("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");
const app = express();
const passport = require("passport");
const users = require("./routes/API/users");

//PORT
const PORT = process.env.PORT || 5000;

// DB Config
// const db = require("./config/keys").mongoURI;

// Connect to the Mongo DB
mongoose
.connect(process.env.MONGODB_URI || "mongodb://localhost/shangrila")
.then(console.log("Connected to Mongodb"))
.catch(err=> console.log(err));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  
}


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Add routes, both API and view
app.use(routes);
app.use('/API/users', users);






// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`) 
});