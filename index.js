const express = require("express");
var bodyParser = require("body-parser");

const route2 = require("./routes/user");
const route = require("./routes/axios");

const app = express();
const mongodb = require("./mongodbconnections/mongooseconnections");
require("dotenv").config({
  path: "./.env",
});

mongodb();
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true })); 
app.use("/user/", route2);
app.use("/axios/", route);

app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port ");
});
