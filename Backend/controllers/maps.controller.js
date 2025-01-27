const {getAddressCoordinates, getDistanceTime, getAutoCompleteSuggestions} = require('../services/maps.service');


const getCoordinates = async (req, res) => {
    const { address } = req.query;

    try {
        const coordinates = await getAddressCoordinates(address);
        res.status(200).json(coordinates);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getDistance = async (req, res) => {
    const { source, destination } = req.query;

    try {
        const data = await getDistanceTime(source, destination);
        const { time, distance } = data;
        res.status(200).json({
            distance,
            time
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getSuggestion = async (req, res) => {
    const { input } = req.query;

    try {
        const suggestions = await getAutoCompleteSuggestions(input);
        res.status(200).json(suggestions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = {
    getCoordinates,
    getDistance,
    getSuggestion
};
