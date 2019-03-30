const router = require("express").Router();
const bandsController = require("../../controllers/bandsController");

// Matches with "/api/bands"
router.route("/search")
  .get(bandsController.findAll)
  
router
.route("/main")
.get(bandsController.findMain)

router
.route("/main/friday")
.get(bandsController.findMainFriday)

router
.route("/main/saturday")
.get(bandsController.findMainSaturday)

router
.route("/main/sunday")
.get(bandsController.findMainSunday)

router
.route("/side")
.get(bandsController.findSide)

router
.route("/side/friday")
.get(bandsController.findSideFriday)

router
.route("/side/saturday")
.get(bandsController.findSideSaturday)

router
.route("/side/sunday")
.get(bandsController.findSideSunday)

router
.route("/harmonium")
.get(bandsController.findHarmonium)

router
.route("/harmonium/friday")
.get(bandsController.findHarmoniumFriday)

router
.route("/harmonium/saturday")
.get(bandsController.findHarmoniumSaturday)

router
.route("/harmonium/sunday")
.get(bandsController.findHarmoniumSunday)

router
.route("/om")
.get(bandsController.findOm)

router
.route("/om/friday")
.get(bandsController.findOmFriday)

router
.route("/om/saturday")
.get(bandsController.findSideSaturday)

router
.route("/om/sunday")
.get(bandsController.findOmSunday)


// Matches with "/api/bands/:id"
router
  .route("/:id")
  .get(bandsController.findById)
  .delete(bandsController.remove);

module.exports = router;
