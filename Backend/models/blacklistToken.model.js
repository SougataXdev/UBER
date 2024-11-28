const mongoose = require("mongoose");

const blacklistedTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 24 * 60 * 60, // 24 hours in seconds
    },
});

// Compile the model
const BlacklistedToken = mongoose.model("BlacklistedToken", blacklistedTokenSchema);

module.exports = BlacklistedToken;
