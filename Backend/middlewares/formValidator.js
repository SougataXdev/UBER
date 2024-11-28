const zod = require("zod");

const registrationFormValidaor = (req, res, next) => {
    const Schema = zod.object({
        fullname: zod.object({
            firstname: zod.string().min(3, "First name must be at least 3 characters").max(20, "First name must be at most 20 characters"),
            lastname: zod.string().min(2, "Last name must be at least 2 characters").max(20, "Last name must be at most 20 characters"),
        }),
        email: zod.string().email("Email is not valid"),
        password: zod.string().min(4, "Password must be at least 4 characters long"),
    });

    const validationResult = Schema.safeParse(req.body);
    if (!validationResult.success) {
        return res.status(400).json({
            message: "Invalid data in registration form",
            success: false,
            errors: validationResult.error.errors, // Include detailed validation errors
        });
    }

    next();
};

const loginFormValidator = (req, res, next) => {
    const Schema = zod.object({
        email: zod.string().email("Email is not valid"),
        password: zod.string().min(4, "Password must be at least 4 characters long"),
    });

    const validationResult = Schema.safeParse(req.body);
    if (!validationResult.success) {
        return res.status(400).json({
            message: "Invalid data in login form",
            success: false,
            errors: validationResult.error.errors, // Include detailed validation errors
        });
    }

    next();
};


module.exports = {
    registrationFormValidaor,
    loginFormValidator
}
