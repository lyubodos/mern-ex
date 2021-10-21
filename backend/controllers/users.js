const User = require("../model/user");


const getUsers = (req, res, next) => {

    User.find()
        .then(users =>  res.json(users))
        .catch(err => res.status(400).json(`Error: ${err}`));
};



const addUser = (req, res, next) => {

    const username = req.body.username;

    const newUser = new User({
        username: username
    });

    newUser.save()
        .then(users => res.json("User added"))
        .catch(err => res.status(400).json(`Error: ${err}`));
};

const removeUser = (req, res, next) => {
    
    const userId = req.params.id;

    console.log(userId);

    User.findByIdAndDelete(userId)
    .then(result => {
        console.log("User deleted!");
    
    })
    .catch(err => res.status(400).json(`Error: ${err}`));

}



module.exports = {
    getUsers,
    addUser,
    removeUser
}