const express = require("express");
const {registrationFormValidaor, loginFormValidator} = require("../middlewares/formValidator");
const {registerUser, loginUser} = require("../controllers/user.controller");

const router = express.Router();

router.post("/register" , registrationFormValidaor , registerUser );

router.post("/login" , loginFormValidator ,loginUser )

module.exports = router;