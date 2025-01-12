const captainModel = require("../models/captain.model");
const createCaptain = require("../services/captain.service");
const bcrypt = require("bcrypt");
const BlacklistedTokenModel = require("../models/blacklistToken.model")

const registerCaptain = async (req, res) => {
    try {
        const { fullname, email, password, vehicle } = req.validatedData;
        // Check if the email is already in use
        const existingCaptain = await captainModel.findOne({ email });
        if (existingCaptain) {
            return res.status(400).json({ error: "Email is already in use" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10); // Using bcrypt for hashing
        

        // Create the captain
        const captain = new captainModel({
            fullname: { firstname: fullname.firstname, lastname: fullname.lastname },
            email,
            password: hashedPassword,
            vehicle: {
                color: vehicle.color,
                plate: vehicle.plate,
                capacity: vehicle.capacity,
                vehicleType: vehicle.vehicleType,
            },
        });
        
        const validationError = captain.validateSync();
        if (validationError) {
            console.error("Validation Error:", validationError.errors);
            return res.status(400).json({ error: validationError.errors });
        }
        
        await captain.save();
        
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

const loginCaptain = async (req, res, next) => {


    const { email, password } = req.validatedData;
    console.log(email, password)

    const captain = await captainModel.findOne({ email }).select('+password');
    console.log(captain)

    if (!captain) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await captain.comparePassword(password);
    console.log(isMatch)
    

    if (!isMatch) {
        console.error("Invalid email or password");
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = captain.generateAuthToken();

    res.cookie('token', token);

    res.status(200).json({ token, captain });
    console.log("captain logged in successfully")
}

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
