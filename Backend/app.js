require("dotenv").config();
const express = require("express");
const app = express();
require("./models/db")
const cors = require("cors");
const userRoutes = require("./routes/user.routes");
const coockieParser = require("cookie-parser");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(coockieParser());

app.use("/user",userRoutes);




app.get("/",(req , res)=>{
    res.send("hii");
})


module.exports = app;