const router = require("express").Router();

const exsController = require("../controllers/exercises");

router.get("/", exsController.getExercises);
router.post("/add", exsController.addExercise);


module.exports = router;