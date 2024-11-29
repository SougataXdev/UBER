const captainModel = require("../models/captain.model");

const createCaptain = async ({
    firstname,
    lastname,
    email,
    password,
    color,
    plate,
    capacity,
    vahicleType,
}) => {
    try {

        const captain = await captainModel.create({
            fullname: {
                firstname,
                lastname,
            },
            email,
            password,
            vahicle: {
                color,
                plate,
                capacity,
                vahicleType,
            },
        });

        return captain;
    } catch (error) {
        throw new Error("Error creating captain: " + error.message);
    }
};

module.exports = createCaptain;
