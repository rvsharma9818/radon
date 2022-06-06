const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/book.route');

const app = express();
const mongodb = require('./mongodbconnections/mongooseconnections')
mongodb();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});