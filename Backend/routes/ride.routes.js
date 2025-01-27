const express = require('express');
const { rideFormValidator } = require('../middlewares/rideFormValidator');
const { createRide } = require('../controllers/ride.controller');
console.log('Imported createRide:', createRide);

const router = express.Router();

router.post('/create-ride', rideFormValidator, createRide);




module.exports = router;
