const Exercise = require("../model/exercise");


const getExercises = (req, res, next) => {
    
    Exercise.find()
        .then(exs =>  res.json(exs))
        .catch(err => res.status(400).json(`Error: ${err}`));
};


const addExercise = (req, res, next) => {

    const username = req.body.username;
    const description = req.body.description;
    const duration = req.body.duration;
    const date = req.body.date;

    const newEx = new Exercise({
        username: username,
        description: description, 
        duration: duration, 
        date: date
    });

    newEx.save()
    .then(exs => res.json("Exercise added"))
    .catch(err => res.status(400).json(`Error: ${err}`));
   
};


module.exports = {
    getExercises,
    addExercise
}