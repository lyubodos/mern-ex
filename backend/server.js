const express = require("express");
const cors = require("cors");

const userRouter = require("./routes/users");
const exRouter = require("./routes/exercises");

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 4000;


app.use("/users", userRouter);
app.use("/exercises", exRouter);


app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
});