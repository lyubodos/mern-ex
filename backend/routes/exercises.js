const router = require("express").Router();

const exsController = require("../controllers/exercises");

router.get("/", exsController.getExercises);


module.exports = router;