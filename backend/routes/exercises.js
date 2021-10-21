const router = require("express").Router();

const exsController = require("../controllers/exercises");

router.get("/", exsController.getExercises);
router.post("/add", exsController.addExercise);

router.delete("/:id", exsController.removeExercise);


module.exports = router;