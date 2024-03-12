// Packages
const Express = require("express");
const Mongoose = require("mongoose");
const cors = require("cors");
const app = Express();
require("dotenv").config();


// Middleware
app.use(Express.json()); // JSON parser
app.use(cors());


// Connections to the api
const database_1 = "users";
const userRoutes = require("./routes/userRoutes");
// const database_2 = "user_profiles";
// const UserProfileModel = require("./models/UserProfiles");


// The GET request for all users (user_details)
app.use(userRoutes);


// Connecting to the user details database
Mongoose.connect(process.env.CONNECTION_STRING, {dbName: database_1})
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Server running successful")
        });
    })
    .catch((error) => {
        console.log(error)
    });



