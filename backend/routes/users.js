const router = require("express").Router();

const usersController = require("../controllers/users");


router.get("/", usersController.getUsers);


module.exports = router;