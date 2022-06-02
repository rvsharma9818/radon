const express = require('express');
const externalModule   =require('../src/logger/logger')
const date = require('../src/utilis/helper.js')
const string  = require('../src/validator/formatter.js')
const router = express.Router();

router.get('/test-me', function (req, res) {
    externalModule.log()
    date.date();
    date.month();
    date.batch();
string.trim();
string.lowercase();
string.uppercase();
    res.send('My first ever api!')
});


module.exports = router;
