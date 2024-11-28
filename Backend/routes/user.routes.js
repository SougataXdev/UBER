const express = require("express");
const {registrationFormValidaor, loginFormValidator} = require("../middlewares/formValidator");
const {registerUser, loginUser, getUserProfile, logout} = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/register" , registrationFormValidaor , registerUser );

router.post("/login" , loginFormValidator ,loginUser );

router.get("/profile" , authMiddleware.authUser , getUserProfile );

router.get("/logout" , authMiddleware.authUser , logout);

module.exports = router;