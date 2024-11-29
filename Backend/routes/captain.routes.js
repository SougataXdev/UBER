const {registerCaptain , loginCaptain, getCaptainProfile, logoutCaptain} = require("../controllers/captain.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const {captainRegistrationFormValidator, captainLoginValidator} = require("../middlewares/captainFormValidators");

const router = require("express").Router();

router.post("/register" , captainRegistrationFormValidator , registerCaptain );
router.post("/login" , captainLoginValidator , loginCaptain);
router.get("/profile" , authMiddleware.authCaptain , getCaptainProfile );
router.get("/logout" , authMiddleware.authCaptain , logoutCaptain);





module.exports = router;