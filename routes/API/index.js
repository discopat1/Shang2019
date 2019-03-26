const router = require("express").Router();
const bandRoutes = require("./bands");
const userRoutes = require("./users");

// Band routes
router.use("/bands", bandRoutes);

//user routes
router.use("/users", userRoutes);

module.exports = router;
