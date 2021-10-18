const Exercise = require("../model/exercise");


const getExercises = (req, res, next) => {
    
    Exercise.find()
        .then(exs =>  res.json(exs))
        .catch(err => res.status(400).json(`Error: ${err}`));
};


module.exports = {
    getExercises
}