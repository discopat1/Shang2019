const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const usersController = require("../../controllers/usersController");

// Load User model
const User = require("../../models/users");
// @route POST api/users/register
// @desc Register user
// @access Public


router
  .route("/register/all")
  .get(usersController.findAll)

router
  .route("/register/all/:id")
  .get(usersController.findById)

router
  .route("/register/all/:id/bands")
  .get(usersController.userBands)

router
  .route("/register/all/:id/bands/:id")
  .get(usersController.findUserBand)
 
// router
//   .route("/register/all/:id/bands/:id")
//   .delete(usersController.remove)

router
  .put("/register/all/:id/bands", function(req, res){
    (console.log(req.params.id));
    (console.log(req.body.bandId))
      let objectId = req.params.id
      let bandId= req.body.bandId
   
      User
        .findOneAndUpdate({_id: objectId}, {$push:{userBands: bandId} }, {new:true})
        .then(function(dbUser) {
          // If the User was updated successfully, send it back to the client
          res.json(dbUser);
        })
        .catch(function(err) {
          // If an error occurs, send it back to the client
          res.json(err);
        });
   
    }),
  
router
  .post("/register", (req, res) => {
          // Form validation
   const { errors, isValid } = validateRegisterInput(req.body);
        // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } 
  const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });
  // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      });
    });

    // @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router
  .post("/login", (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  const email = req.body.email;
    const password = req.body.password;
  // Find user by email
    User.findOne({ email }).then(user => {
      // Check if user exists
      if (!user) {
        return res.status(404).json({ emailnotfound: "Email not found" });
      }
  // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };
// Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

module.exports = router;
  