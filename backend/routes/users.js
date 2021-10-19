const router = require("express").Router();

const usersController = require("../controllers/users");


router.get("/", usersController.getUsers);
router.post("/add", usersController.addUser);



module.exports = router;