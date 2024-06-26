"use strict";

const express = require("express");
const app = express();

const home = require("./routes/home");

app.set("views", "./views/home");
app.set("view engine", "ejs")

app.use("/", home);

module.exports = app;