const z = require("zod");

const captainRegistrationFormValidator = (req, res, next) => {
  const schema = z.object({
    fullname: z.object({
      firstname: z
        .string()
        .min(3, "Firstname must be at least 3 characters long")
        .nonempty("Firstname is required"),
      lastname: z
        .string()
        .min(3, "Lastname must be at least 3 characters long")
        .optional(), 
    }),
    email: z
      .string()
      .email("Invalid email address")
      .nonempty("Email is required"), // Email must not be empty
    password: z
      .string()
      .min(6, "Password must be at least 6 characters long")
      .nonempty("Password is required"), // Ensure password is provided

    vehicle: z.object({
      color: z
        .string()
        .min(3, "Color must be at least 3 characters long")
        .nonempty("Vehicle color is required"), // Make sure the vehicle color is provided
      plate: z
        .string()
        .min(3, "Plate must be at least 3 characters long")
        .nonempty("Vehicle plate is required"), // Ensure plate is provided
      capacity: z
        .number()
        .min(1, "Capacity must be at least 1")
        .int("Capacity must be an integer"), 
      vehicleType: z.enum(["car", "motorcycle", "auto", "toto"]),
    }),
  });

  // Perform schema validation
  const result = schema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      error: "Captain registration validation failed",
      details: result.error.errors, // Detailed validation errors
    });
  }

  req.validatedData = result.data; // Attach validated data to request
  next(); // Proceed to the next middleware or route handler
};

// Captain Login Validator
const captainLoginValidator = (req, res, next) => {
  const schema = z.object({
    email: z
      .string()
      .email("Invalid email address")
      .nonempty("Email is required"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters long")
      .nonempty("Password is required"),
  });

  const result = schema.safeParse(req.body);
  console.log(result.data);

  if (!result.success) {
    console.log("login form validation failed")
    return res.status(400).json({
      error: "Captain login validation failed",
      details: result.error.errors,
    });
  }

  req.validatedData = result.data; // Attach validated data to request
  console.log("captain login data validation succesfull")
  next(); // Proceed to the next middleware or route handler
};

module.exports = { captainRegistrationFormValidator, captainLoginValidator };
