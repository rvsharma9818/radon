const express = require('express');
const router = express.Router();

const {postbookdetails,getbookdetails } = require('../controllers/bookcontroller');

router.route('/getbook').get(getbookdetails);

router.route('/postbook').post(postbookdetails);


module.exports = router;
