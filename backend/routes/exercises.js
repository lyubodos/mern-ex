const router = require("express").Router();

const Exercise = require("../model/exercise");


router.get("/", (req, res, next) => {
    
    Exercise.find()
        .then(exs =>  res.json(exs))
        .catch(err => res.status(400).json(`Error: ${err}`));
});


module.exports = router;