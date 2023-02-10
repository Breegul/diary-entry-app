const express = require("express");
const cors = require("cors");
const path = require("path");
const diaryRouter = require("./routers/diary");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", express.static(path.join(__dirname, "..", "client")));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
})



app.use("/diary", diaryRouter);

module.exports = app;