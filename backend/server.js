const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 4000;

app.use(() => {
    res.write("Hello Maaaan!!!");
    res.end();
});

app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
});