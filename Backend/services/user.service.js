const userModel = require("../models/user.model");

const createUser = async ({ firstname, lastname, email, password }) => {
    try {
        const user = await userModel.create({
            fullname: {
                firstname,
                lastname,
            },
            email,
            password, // The password should already be hashed before calling this function
        });

        return user;
    } catch (error) {
        throw new Error("Error creating user: " + error.message);
    }
};

module.exports = createUser;
