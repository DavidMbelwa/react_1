const Mongoose = require("mongoose");
//const


// Defining the schema
const UserProfileSchema = new Mongoose.Schema(
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
const userProfileModel = Mongoose.model("user_profiles", UserProfileSchema);
module.exports = userProfileModel;