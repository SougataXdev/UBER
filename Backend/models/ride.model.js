const e = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const rideSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    captain: {
        type: Schema.Types.ObjectId,
        ref: 'Captain',
        required: true
    },
    pickup: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    fare: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'ongoing', 'completed', 'cancelled'],
        default: 'pending'
    },
    duration: {
        type: Number
    },
    distance: {
        type: Number
    },
    paymentID: {
        type: String
    },
    orderID: {
        type: String
    },
    signature: {
        type: String
    }





}, {
    timestamps: true
});


module.exports = mongoose.model('Ride', rideSchema);