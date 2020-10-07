#!/usr/bin/env node
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes");
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(express.static("build"));

routes(app);

app.listen(port, () => console.log("Calculator has started on: " + port));
