const z = require("zod");

const captainRegistrationFormValidator = (req, res, next) => {
    const schema = z.object({
        fullname: z.object({
            firstname: z
                .string()
                .min(3, "Firstname must be at least 3 characters long"),
            lastname: z
                .string()
                .min(3, "Lastname must be at least 3 characters long")
                .optional(),
        }),
        email: z
            .string()
            .email("Invalid email address")
            .nonempty("Email is required"),
        password: z
            .string()
            .min(6, "Password must be at least 6 characters long"), // Adjust password policy as needed
        socketId: z.string().optional(),
        status: z.enum(["active", "inactive"]).default("inactive"),
        vahicle: z.object({
            color: z
                .string()
                .min(3, "Color must be at least 3 characters long"),
            plate: z
                .string()
                .min(3, "Plate must be at least 3 characters long"),
            capacity: z
                .number()
                .min(1, "Capacity must be at least 1"),
            vahicleType: z
                .enum(["car", "motorcycle", "auto", "toto"]),
        }),
        location: z.object({
            lat: z.number().optional(),
            lng: z.string().optional(),
        }).optional(),
    });

    const result = schema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({
            error: "captain Validation failed",
            details: result.error.errors,
        });
    }

    req.validatedData = result.data; // Attach validated data to request
    next(); // Proceed to the next middleware or route handler
};

module.exports = captainRegistrationFormValidator;
