const Express = require("express");
const router = Express.Router();
const UserDetailModel = require("../models/UserDetails");


// All Users
router.get("/getUsers", (req, res) => {
    UserDetailModel.find({}).then((err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        };
    });
})


// Single User
router.get("/users/:id", (req, res) => {
    UserDetailModel.findById({}).then((err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        };
    });
})


// New User
router.post("/newUser", async (req, res) => {
    const user = req.body
    const newUser = new UserDetailModel(user);
    await newUser.save();

    res.json(user)
})


// Update User details
//router.patch()


//Delete User Information
//router.delete()

module.exports = router;

