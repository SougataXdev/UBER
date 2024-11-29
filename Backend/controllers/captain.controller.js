const captainModel = require("../models/captain.model");
const createCaptain = require("../services/captain.service");
const bcrypt = require("bcrypt");
const BlacklistedTokenModel = require("../models/blacklistToken.model")

const registerCaptain = async (req, res) => {
    try {
        const { fullname, email, password, vahicle } = req.validatedData;

        // Check if the email is already in use
        const existingCaptain = await captainModel.findOne({ email });
        if (existingCaptain) {
            return res.status(400).json({ error: "Email is already in use" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10); // Using bcrypt for hashing

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

        // Set token as an HTTP-only cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // Secure flag for HTTPS in production
            sameSite: "strict", // Prevent CSRF
            maxAge: 7 * 24 * 60 * 60 * 1000, // 1 week
        });

        // Respond with success message
        res.status(201).json({
            message: "Captain registered successfully",
            token,
            captain: {
                _id: captain._id,
                fullname: captain.fullname,
                email: captain.email,
                status: captain.status,
                vahicle: captain.vahicle,
            },
        });
    } catch (error) {
        console.error("Error registering captain:", error.message);
        res.status(500).json({ error: "Failed to register captain", details: error.message });
    }
};

const loginCaptain = async (req, res) => {
    try {
        const { email, password } = req.validatedData;

        // Find the captain by email
        const captain = await captainModel.findOne({ email }).select("+password");
        if (!captain) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        // Check if the provided password matches the hashed password in the database
        const isMatch = await bcrypt.compare(password, captain.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        // Generate an authentication token
        const token = captain.generateAuthToken();

        // Set token as an HTTP-only cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // Secure flag for HTTPS in production
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000, // 1 week
        });

        // Respond with success message
        res.status(200).json({
            message: "Login successful",
            token,
            captain: {
                _id: captain._id,
                fullname: captain.fullname,
                email: captain.email,
                status: captain.status,
                vahicle: captain.vahicle,
            },
        });
    } catch (error) {
        console.error("Error logging in captain:", error.message);
        res.status(500).json({ error: "Failed to log in captain", details: error.message });
    }
};

const getCaptainProfile = async(req , res)=>{
    return res.status(200).json(req.captain);
}


const logoutCaptain = async(req , res)=>{
    res.clearCookie("token");
    const token =req.cookies.token || req.headers.authorization.split(" ")[1];
    await BlacklistedTokenModel.create({token});

    res.status(200).json({message:"logged out"})
}

module.exports = { registerCaptain, loginCaptain , getCaptainProfile , logoutCaptain };
