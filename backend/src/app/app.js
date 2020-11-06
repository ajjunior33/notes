require("dotenv").config();
const express = require("express");
const { uuid } = require("uuidv4");
const marked = require("marked");
const cors = require("cors");
const mongoose = require("mongoose");

const routes = require("./routes/routes");

const app = express();

const listen = [];

mongoose.connect(process.env.CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);


module.exports = app;
