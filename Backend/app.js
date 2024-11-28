require("dotenv").config();
const express = require("express");
const app = express();
require("./models/db")
const cors = require("cors");
const userRoutes = require("./routes/user.routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/user",userRoutes);




app.get("/",(req , res)=>{
    res.send("hii");
})


module.exports = app;