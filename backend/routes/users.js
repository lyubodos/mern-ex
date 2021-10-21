const router = require("express").Router();

const usersController = require("../controllers/users");


router.get("/", usersController.getUsers);
router.post("/add", usersController.addUser);

router.post("/delete/:id", usersController.removeUser);



module.exports = router;