const express = require("express");
var bodyParser = require("body-parser");
const cors = require('cors');
const morgan = require('morgan');

const route = require("./routes/Product");
const route1 = require("./routes/order");
const route2 = require("./routes/user");
const app = express();
const mongodb = require("./mongodbconnections/mongooseconnections");
const { mid } = require("./middleware/middleware");
mongodb();
app.use(bodyParser.json());
app.use(mid)
app.use(bodyParser.urlencoded({ extended: true })); app.use("/book/", route);
app.use("/product/", route);
app.use("/order/", route1);
app.use("/user/", route2);

app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port ");
});
