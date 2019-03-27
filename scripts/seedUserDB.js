// const mongoose = require("mongoose");
// const db = require("../models");

// // This file empties the collection and inserts the users below

// mongoose.connect(
//   process.env.MONGODB_URI ||
//   "mongodb://localhost/shangrila"
// );

//  const userSeed = [
//      {
//          "name":"Ashley Hurlburt",
//          "email":"ladynirvana@hotmail.com",
//          "password":"Sterling1"
//      },
//      {
//        "name": "Bob",
//        "email":"bob@bob.com",
//        "password":"bobby"  
//      }

//     ];
//     console.log("end of the user data", db.Users)
//     db.Users
//      .then(() => db.Users.collection.insertMany(userSeed))
//      .then(data => {
//        console.log(data.result.n + " records inserted!");
//        process.exit(0);
//      })
//      .catch(err => {
//        console.error(err);
//        process.exit(1);
//      });
   