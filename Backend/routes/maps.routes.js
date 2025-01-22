const express = require('express');
const router = express.Router();
const mapsController = require('../controllers/maps.controller');
const authMiddleware = require("../middlewares/auth.middleware");

router.get('/get-coordinates', authMiddleware.authUser, mapsController.getCoordinates);

module.exports = router;
