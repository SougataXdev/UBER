const z = require('zod');

const rideFormSchema = z.object({
    userId: z.string().min(1, { message: "Invalid User ID" }),
    pickUp: z.string().min(1, { message: "Invalid Pickup Location" }),
    destination: z.string().min(1, { message: "Invalid Destination" }),
    vehicleType: z.string().min(1, { message: "Invalid Vehicle Type" }),
});

const rideFormValidator = (req, res, next) => {
    try {
        const validation = rideFormSchema.safeParse(req.body);
        if (!validation.success) {
            return res.status(400).json({ errors: validation.error.issues });
        }
        next(); 
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    rideFormValidator,
};
