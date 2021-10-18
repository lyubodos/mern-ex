const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv/config");

const userRouter = require("./routes/users");
const exRouter = require("./routes/exercises");

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 4000;

const uri = process.env.ATLAS_URI;

mongoose.connect(uri,  { useNewUrlParser: true});

const connection = mongoose.connection;


connection.once("open", () => {
    console.log("MongoDB connection was established successfully")
});


app.use("/users", userRouter);
app.use("/exercises", exRouter);


app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
});