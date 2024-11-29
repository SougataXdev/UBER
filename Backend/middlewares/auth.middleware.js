const userModel = require("../models/user.model");
const BlacklistedTokenModel = require("../models/blacklistToken.model");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const captainModel = require("../models/captain.model");


module.exports.authUser = async (req, res, next) => {
    // Extract the token from cookies or Authorization header
    const token = req.cookies.token || req.headers?.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Unauthorized - Token Missing", success: false });
    }

    try {
        // Check if the token is blacklisted
        const isBlackListed = await BlacklistedTokenModel.findOne({ token });
        if (isBlackListed) {
            return res.status(401).json({ message: "Unauthorized - Token Blacklisted", success: false });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Fetch the user details from the database
        const user = await userModel.findById(decoded._id);
        if (!user) {
            return res.status(401).json({ message: "Unauthorized - User Not Found", success: false });
        }

        // Attach the authenticated user to the request object
        req.user = user;

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        console.error("Error in authUser middleware:", error.message);
        return res.status(401).json({ message: "Unauthorized - Invalid Token", success: false });
    }
};


module.exports.authCaptain = async (req, res, next) => {
    // Extract the token from cookies or Authorization header
    const token = req.cookies.token || req.headers?.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Unauthorized - Token Missing", success: false });
    }

    try {
        // Check if the token is blacklisted
        const isBlackListed = await BlacklistedTokenModel.findOne({ token });
        if (isBlackListed) {
            return res.status(401).json({ message: "Unauthorized - Token Blacklisted", success: false });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Fetch the captain details from the database
        const captain = await captainModel.findById(decoded._id);
        if (!captain) {
            return res.status(401).json({ message: "Unauthorized - Captain Not Found", success: false });
        }

        // Attach the authenticated captain to the request object
        req.captain = captain;

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        console.error("Error in authCaptain middleware:", error.message);
        return res.status(401).json({ message: "Unauthorized - Invalid Token", success: false });
    }
};
