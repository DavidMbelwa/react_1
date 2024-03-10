const Express = require("express");
const Mongoose = require("mongoose");
const cors = require("cors");
const app = Express();
const CONNECTION_STRING = "mongodb+srv://mukajangadavid:B2c-8675437@cluster0.zzsvmdc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const UserDetailModel = require("./models/users");



// Parsing the incoming json POST requests 
app.use(Express.json);


app.use(cors)


// Connecting to the database
Mongoose.connect(CONNECTION_STRING, {dbName: "user_details"});



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