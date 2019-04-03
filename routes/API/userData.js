const router = require("express").Router();
const usersController = require("../../controllers/usersController");


//Matches with /api/userdata
router
  .route("/all")
  .get(usersController.findAll)

router
  .route("/:id")
  .get(usersController.findById)

router
  .route("/:id/bands/")
  .get(usersController.userBands)
  

router
  .route("/:id/bands/:bandId")
  .get(usersController.findUserBand)
  .delete(usersController.remove)
  .put(usersController.addBand)
  
 

  
module.exports = router;

    
   
  