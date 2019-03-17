const router = require("express").Router();
const bandRoutes = require("./bands");

// Band routes
router.use("./bands", bandRoutes);

module.exports = router;
