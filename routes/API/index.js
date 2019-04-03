const router = require("express").Router();
const bandRoutes = require("./bands");
const userRoutes = require("./users");
const userDataRoutes= require("./userData");

// Band routes
router.use("/bands", bandRoutes);

//user Auth routes
router.use("/users", userRoutes);

//user data & user band routes
router.use("/userData", userDataRoutes);


module.exports = router;
