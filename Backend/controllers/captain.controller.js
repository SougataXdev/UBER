const captainModel = require("../models/captain.model");
const createCaptain = require("../services/captain.service");

const registerCaptain = async (req, res) => {
    try {
        const { fullname, email, password, vahicle } = req.validatedData;

        // Check if the email is already in use
        const existingCaptain = await captainModel.findOne({ email });
        if (existingCaptain) {
            return res.status(400).json({ error: "Email is already in use" });
        }

        // Hash the password
        const hashedPassword = await captainModel.hashPassword(password);

        // Create the captain
        const captain = await createCaptain({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedPassword,
            color: vahicle.color,
            plate: vahicle.plate,
            capacity: vahicle.capacity,
            vahicleType: vahicle.vahicleType,
        });

        // Generate an authentication token
        const token = captain.generateAuthToken();

        // Respond with the captain details and token
        res.status(201).json({
            message: "Captain registered successfully",
            token,
            captain,
        });
    } catch (error) {
        console.error("Error registering captain:", error.message);
        res.status(500).json({ error: "Failed to register captain", details: error.message });
    }
};

module.exports = registerCaptain;
