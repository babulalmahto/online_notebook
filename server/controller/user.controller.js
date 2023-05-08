const userModel=require("../modal/collections/user.collection");


const userPostController = async (req, res) => {
    const user = req.body;
    try {
        const data = await userModel.findOne({ phoneNumber: user.phoneNumber });
        // console.log(data);
        if (data) {
            res.status(400).send({ msg: "already you have an account" });
        } else {
            const userDB = await userModel.create(user);
            res.status(201).send({ msg: "data stored in db", data: userDB });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: "something went wrong please try again later" });
    }
}

module.exports = { userPostController };