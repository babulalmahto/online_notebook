const router = require("express").Router();

router.get('/', (req, res) => {
    console.log("THis is get methos");
});
router.post('/', (req, res) => {
    console.log("This is post methos");
});

module.exports = { router };