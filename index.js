const express = require("express");
const app = express();
const port = process.env.PORT || 4007;
const db = require("./db");
const Team = require("./team/model");
const teamRouter = require("./team/router");

app.listen(port, () =>
  console.log(`Hello there!, I am listening on port ${port}!`)
);

app.use(teamRouter);
