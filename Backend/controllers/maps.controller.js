const getAddressCoordinates = require('../services/maps.service');

const getCoordinates = async (req, res, next) => {
    const { address } = req.query;

    try {
        const coordinates = await getAddressCoordinates(address);
        res.status(200).json(coordinates);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getCoordinates,
};
