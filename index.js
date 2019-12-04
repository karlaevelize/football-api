const express = require("express");
const app = express();
const port = process.env.PORT || 4001;
const teamRouter = require("./team/router");
const bodyParser = require("body-parser");

app.listen(port, () =>
  console.log(`Hello there!, I am listening on port ${port}!`)
);

const jsonParser = bodyParser.json();
app.use(jsonParser);
app.use(teamRouter);
