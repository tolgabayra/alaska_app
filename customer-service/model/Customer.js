const mongoose = require("mongoose")


const CustomerSchema = new mongoose.Schema(
    {
        firstName: {type: String, required: true, unique: true},
        lastName: {type: String, required: true},
        phoneNumber: {type: String, required: true},
        email: {type: String},
        city: {type: String},
        address: {type: String}

    },
    {
        timestamps: true
    }
)


module.exports = mongoose.model("Customer", CustomerSchema)