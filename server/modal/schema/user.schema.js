const { Schema } = require('mongoose');

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dateOfBirth: Object,
    phoneNumber: {
        type: Number,
        required: true
    },
    emailId: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    occupation: String,
    country: String,
    intrestedIn: String,
    language: [
        {
            name: {
                type: String,
                required: true
            },
            level: {
                type: String,
                required: true
            },
            ability: Array
        }
    ]
});

module.exports = userSchema;