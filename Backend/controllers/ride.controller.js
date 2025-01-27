const rideService = require('../services/new.ride.service');

const createRide = async (req, res) => {
    try {
        const fare = await rideService.getFare(req.body.pickUp, req.body.destination);

        const ride = await rideService.createRide({
            user: req.body.userId,
            pickup: req.body.pickUp,
            destination: req.body.destination,
            fare: fare[req.body.vehicleType],
        });

        return res.status(201).json({ ride });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

console.log('Exporting createRide:', createRide);


module.exports = {
    createRide,
};
