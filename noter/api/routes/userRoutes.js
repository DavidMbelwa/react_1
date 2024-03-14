const Express = require("express");
const router = Express.Router();
const { newUser, allUsers, singleUser, updateUser, deleteUser } = require("../controllers/userControllers")

// All Users
router.get("/users", allUsers)


// Single User
router.get("/users/:id", singleUser)


// New User
router.post("/newUser", newUser);


// Update User details
router.patch("/user/:id", updateUser)


//Delete User Information
router.delete("/user/:id", deleteUser)

module.exports = router;

