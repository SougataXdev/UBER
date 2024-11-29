const registerCaptain = require("../controllers/captain.controller");
const captainRegistrationFormValidator = require("../middlewares/captainFormValidators");

const router = require("express").Router();

router.post("/register" , captainRegistrationFormValidator , registerCaptain );





module.exports = router;