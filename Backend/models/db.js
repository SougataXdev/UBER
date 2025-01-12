const mongoose = require("mongoose");

const DB_URI = process.env.DB_URI;

mongoose.connect(DB_URI).then(() => {
    console.log("DB connected successfully");
}).catch((err) => {
    console.log(`DB connection failed: ${err}`);
});
