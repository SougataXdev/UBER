require("dotenv").config();
const express = require("express");
const app = express();
require("./models/db")
const cors = require("cors");
const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes");
const coockieParser = require("cookie-parser");
const mapsRoutes = require("./routes/maps.routes");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(coockieParser());

app.use("/user",userRoutes);

app.use("/captains" , captainRoutes);
app.use("/maps" , mapsRoutes);

app.get("/",(req , res)=>{
    res.send("hii");
})


module.exports = app;