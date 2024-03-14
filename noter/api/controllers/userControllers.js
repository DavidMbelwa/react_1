// The User Model
const UserDetailModel = require("../models/UserDetails");
const Mongoose = require("mongoose");


// Getting All Users
const allUsers = (req, res) => {
    UserDetailModel.find({}).then((err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        };
    });
}



// Getting a Single User
const singleUser = async (req, res) => {

    // Getting the id
    const { id } = req.params

    // Validating the id
    if (!Mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such user"});
    }

    // Searching the user
    const user = await UserDetailModel.findById(id);
    if (!user) {
        return res.status(404).json({error: "No such user"})
    }

    // Returning the user
    res.status(200).json(user);
};



// Creating a User
const newUser = async (req, res) => {
    const user = req.body

    try {
        const newUser = new UserDetailModel(user);
        await newUser.save();
        res.json(user);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}



// Updating a User
const updateUser = async (req, res) => {
    const { id } = req.params

    // Validating the id
    if (!Mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such user"});
    }

    // Updating the user
    const user = await UserDetailModel.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    // Return the new list
    res.status(200).json(user)
}



// Delete a User
const deleteUser = async (req, res) => {
    const { id } = req.params

    // Validating the id
    if (!Mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such user"});
    }

    // Deleting the user
    const user = await UserDetailModel.findOneAndDelete({_id: id})

    // Return the new list
    res.status(200).json(user)
}

module.exports = {
    newUser,
    allUsers,
    singleUser,
    deleteUser,
    updateUser
}