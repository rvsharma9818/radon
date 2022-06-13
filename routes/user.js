const express = require("express");
const router = express.Router();
const { mid} = require('../middleware/middleware')
const {
  postuserdetails,
  getuserdetails
} = require("../controllers/usercontroller");

router.route("/getuser").get(getuserdetails);

router.route("/postuser").post(mid,postuserdetails);


module.exports = router;
