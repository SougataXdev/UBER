const mongoose = require("mongoose");

const DB_URI = process.env.DB_URI;

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("DB connected successfully");
}).catch((err) => {
    console.log(`DB connection failed: ${err}`);
});
