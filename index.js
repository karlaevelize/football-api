const express = require("express");
const app = express();
const port = process.env.PORT || 4005;
const db = require("./db");
const Team = require("./team/model");

app.listen(port, () =>
  console.log(`Hello there!, I am listening on port ${port}!`)
);
