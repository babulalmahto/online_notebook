const express = require("express");
const app = express();
const cors = require("cors");

const { userRouter } = require("./router/user.router");


app.use(
    cors({
        origin: "http://localhost:3000",
    })
);
app.use(express.json());
app.use(express.static("public"));

app.use('/user', userRouter);

module.exports = app;