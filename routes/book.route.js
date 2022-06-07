const express = require('express');
const router = express.Router();

const {postbookdetails,getbookdetails,getBooksInYear,getParticularBooks,getRandomBooks,getXINRBooks,bookdetails  } = require('../controllers/bookcontroller');

router.route('/getbook').get(getbookdetails);

router.route('/postbook').post(postbookdetails);

router.route('/getBooksInYear/:year').get(getBooksInYear);
router.route('/getParticularBooks').get(getParticularBooks);
router.route('/getRandomBooks').get(getRandomBooks);
router.route('/getXINRBooks').get(getXINRBooks);

router.route('/bookList').get(bookdetails);

module.exports = router;
