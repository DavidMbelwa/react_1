// Imports 
const Mongoose = require("mongoose");


// Creating a Users Schema
const UserDetailSchema = new Mongoose.Schema(
    {
        user_name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        }
    }
);


// Exporting the users Schema
const userDetailModel = Mongoose.model("user_details", UserDetailSchema);
module.exports = userDetailModel;