const userRouter = require("express").Router();

const { userPostController } = require("../controller/user.controller");

userRouter.get('/', () => { });
userRouter.post('/', userPostController);

module.exports = { userRouter };