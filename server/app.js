const express = require("express");
const cors = require("cors");
const diaryRouter = require("./routers/diary");

const app = express();

app.use(cors());
app.use(express.json());

// TODO serve index.html on /

app.get("/", (req, res)=> {
    res.json({message: "Welcome to diary API"})
});

app.use("/diaries", diaryRouter);

module.exports = app;