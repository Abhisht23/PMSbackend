require('dotenv').config();
const express = require("express");
const app = express();
const task = require("./routes/task");
const mongoose = require("mongoose");


//Middlewares
app.use(express.json());  
app.use(express.static("./public"));

//Routes
app.use("/api/v1/task", task);


//Connection with Database

mongoose.set("strictQuery", false);
mongoose.connect( process.env.DATABASE)
.then(() => 
    console.log("Connected to MongoDB database")
);




//App server
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`app is running on ${port}`);
});