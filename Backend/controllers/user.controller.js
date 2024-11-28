const userModel = require("../models/user.model");
const createUser = require("../services/user.service");

const registerUser = async (req, res) => {
    try {
        const {fullname, email, password } = req.body;
        const {firstname , lastname} = fullname;

        // Check if the user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already registered", success: false });
        }

        // Hash the password and create the user
        const hashedPassword = await userModel.hashPassword(password);
        const newUser = await createUser({
            firstname,
            lastname,
            email,
            password: hashedPassword,
        });

        const token = newUser.generateAuthToken();

        return res.status(201).json({ 
            message: "User registered successfully", 
            success: true, 
            user: {
                id: newUser._id,
                fullname: newUser.fullname,
                email: newUser.email,
                token
            },
        });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", success: false, error: error.message });
    }
};


const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const existingUser = await userModel.findOne({ email }).select("+password");
        if (!existingUser) {
            return res.status(400).json({ message: "Invalid email or password", success: false });
        }

        // Check if the password is correct
        const isPasswordValid = await existingUser.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid email or password", success: false });
        }

        // Generate auth token
        const token = existingUser.generateAuthToken();

        return res.status(200).json({
            message: "Login successful",
            success: true,
            user: {
                id: existingUser._id,
                fullname: existingUser.fullname,
                email: existingUser.email,
                token
            },
        });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", success: false, error: error.message });
    }
};


module.exports = {
    registerUser,
    loginUser
}
