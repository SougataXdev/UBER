const mongoose = require("mongoose");
const JWT = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, "name must be atlest 3 chars"]


        }
        ,
        lastname: {
            type: String,
            minlength: [3, "name must be atlest 3 chars"]
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    socketId: {
        type: String
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "inactive"
    },
    vahicle: {
        color: {
            type: String,
            required: true,
            minlengthL: [3, "color must be atkest 3 chars"]
        },
        plate: {
            type: String,
            required: true,
            minlength: [3, "plate must be 3 chars"]
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, "capacity must be atleast 1"]
        },
        vahicleType: {
            type: String,
            required: true,
            enum: ["car", "motorcycle", "auto", "toto"]
        }
    },
    location:{
        lat:{
            type:Number,

        },
        lng:{
            type:String
        }
    }
});


captainSchema.methods.generateAuthToken = function(){
    const token = JWT.sign({_id:this.id} , process.env.JWT_SECRET ,{expiresIn:"24h"});
    return token;
}

captainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password , this.password);
}

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
};


const captainModel = mongoose.model("captain" , captainSchema);


module.exports = captainModel;