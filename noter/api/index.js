const Express = require("express");
const Mongoose = require("mongoose");
const cors = require("cors");
const app = Express();










// The GET request for all users
app.get("/getUsers", (req, res) => {
    UserDetailModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        };
    })
});


// The GET request for a single user
app.get("/users/:id", (req, res) => {
    UserDetailModel.findById({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        };
    });
});



// The POST request
app.post("newUser", async (req, res) => {
    const user = req.body
    const newUser = new UserDetailModel(user);
    await newUser.save();

    res.json(user)
});


// The PUT request
// app.put()


// The DELETE request
// app.delete()


app.listen(3001, () => {
    console.log("Server running Successful")
})