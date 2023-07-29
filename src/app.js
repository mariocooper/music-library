const artistRouter = require("../src/routes/artist");

const express = require("express");

const app = express();

app.use(express.json());

app.use("/artists", artistRouter);

module.exports = app;
