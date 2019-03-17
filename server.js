
const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/shangrila");


db.on("error", function(error) {
  console.log("Database Error:", error);
});


// //API ROUTES

// //Main Stage-all 
// app.get("/Main", function(req, res){
//   db.bands.find({stage:"Main"}).sort({time: 1}, function (err, data){
//     if (err){
//       console.log(err);
//     }
//     else{
//       res.jason(data);
//     }
    
 
// });
// });
// //Side Stage All
// app.get("/Side", function(req, res){
//   db.bands.find({stage:"Side"}).sort({time: 1}, function (err, data){
//     if (err){
//       console.log(err);
//     }
//     else{
//       res.jason(data);
//     }
    
 
// });
// });

// //Harmonium All
// app.get("/Harmonium", function(req, res){
//   db.bands.find({stage:"Harmonium"}).sort({time: 1}, function (err, data){
//     if (err){
//       console.log(err);
//     }
//     else{
//       res.jason(data);
//     }
    
 
// });
// });

// //OM Dome all
// app.get("/Om", function(req, res){
//   db.bands.find({stage:"Om Dome"}).sort({time: 1}, function (err, data){
//     if (err){
//       console.log(err);
//     }
//     else{
//       res.jason(data);
//     }
    
 
// });
// });
// //Main:Friday
// app.get("/Main/Friday", function(req, res) {
//   db.bands.find({stage:"Main", day:"Friday"}).sort({time: 1}, function (err, data){
//     if (err){
//       console.log(err);
//     }
//     else{
//       res.jason(data);
//     }
    
//   });
// });
// //Main: Saturday
// app.get("/Main/Saturday", function(req, res) {
//   db.bands.find({stage:"Main", day:"Saturday"}).sort({time: 1}, function (err, data){
//     if (err){
//       console.log(err);
//     }
//     else{
//       res.jason(data);
//     }
    
//   });
// });
// //Main: Sunday
// app.get("/Main/Sunday", function(req, res) {
//   db.bands.find({stage:"Main", day:"Sunday"}).sort({time: 1}, function (err, data){
//     if (err){
//       console.log(err);
//     }
//     else{
//       res.jason(data);
//     }
    
//   });
// });

// //Side: Friday
// app.get("/Side/Friday", function(req, res) {
//   db.bands.find({stage:"Side", day:"Friday"}).sort({time: 1}, function (err, data){
//     if (err){
//       console.log(err);
//     }
//     else{
//       res.jason(data);
//     }
    
//   });
// });

// //Side Saturday
// app.get("/Side/Saturday", function(req, res) {
//   db.bands.find({stage:"Side", day:"Saturday"}).sort({time: 1}, function (err, data){
//     if (err){
//       console.log(err);
//     }
//     else{
//       res.jason(data);
//     }
    
//   });
// });

// //Side Sunday
// app.get("/Side/Sunday", function(req, res) {
//   db.bands.find({stage:"Side", day:"Sunday"}).sort({time: 1}, function (err, data){
//   if (err){
//     console.log(err);
//   }
//   else{
//     res.jason(data);
//   }
  
// });
// });

// //Harmonium Friday
// app.get("/Harmonium/Friday", function(req, res) {
//   db.bands.find({stage:"Harmonium", day:"Friday"}).sort({time: 1}, function (err, data){
//     if (err){
//       console.log(err);
//     }
//     else{
//       res.jason(data);
//     }
    
//   });
// });

// //Harmonium Saturday
// app.get("/Harmonium/Saturday", function(req, res) {
//   db.bands.find({stage:"Harmonium", day:"Saturday"}).sort({time: 1}, function (err, data){
//     if (err){
//       console.log(err);
//     }
//     else{
//       res.jason(data);
//     }
    
//   });
// });

// //harmonium Sunday
// app.get("/Harmonium/Sunday", function(req, res) {
//   db.bands.find({stage:"Harmonium", day:"Sunday"}).sort({time: 1}, function (err, data){
//     if (err){
//       console.log(err);
//     }
//     else{
//       res.jason(data);
//     }
    
//   });
// });

// //Om Dome Friday
// app.get("/Om/Friday", function(req, res) {
//   db.bands.find({stage:"Om Dome", day:"Friday"}).sort({time: 1}, function (err, data){
//     if (err){
//       console.log(err);
//     }
//     else{
//       res.jason(data);
//     }
    
//   });
// });

// //Om Dome Saturday
// app.get("/Om/Saturday", function(req, res) {
//   db.bands.find({stage:"Om Dome", day:"Saturday"}).sort({time: 1}, function (err, data){
//     if (err){
//       console.log(err);
//     }
//     else{
//       res.jason(data);
//     }
    
//   });
// });
// //Om Dome Sunday
// app.get("/Om/Sunday", function(req, res) {
//   db.bands.find({stage:"Om Dome", day:"Sunday"}).sort({time: 1}, function (err, data){
//     if (err){
//       console.log(err);
//     }
//     else{
//       res.jason(data);
//     }
    
//   });
// });





// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`) 
});