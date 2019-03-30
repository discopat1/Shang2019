const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./API");

// API Routes
router.use("/api", apiRoutes);
const root = require('path').join(__dirname, 'client', 'build')
// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile('index.html', { root });
});

module.exports = router;



    
