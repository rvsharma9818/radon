const express = require("express");
var bodyParser = require("body-parser");

const route = require("./routes/book.route");
const route1 = require("./routes/author.route");
const route2 = require("./routes/publisher");

const app = express();
const mongodb = require("./mongodbconnections/mongooseconnections");
mongodb();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/book/", route);
app.use("/author/", route1);
app.use("/publisher/", route2);

app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port ");
});
