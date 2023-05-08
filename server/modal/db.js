const mongoose = require('mongoose');

const dbURL = "mongodb://127.0.0.1:27017/notebook";

const connectWithDB = async () => {
    try {
        await mongoose.connect(dbURL);
        console.log("connected with DB");
    } catch (err) {
        console.log("not connected DB");
    }
}

module.exports = connectWithDB;