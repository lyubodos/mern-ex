const User = require("../model/user");


const getUsers = (req, res, next) => {

    User.find()
        .then(users =>  res.json(users))
        .catch(err => res.status(400).json(`Error: ${err}`));
};


module.exports = {
    getUsers
}