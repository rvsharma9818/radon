const express = require("express");
const router = express.Router();

const {
  postauthordetails,
  getauthordetails,
} = require("../controllers/authorcontroller");

router.route("/getauthordetails").get(getauthordetails);

router.route("/postauthordetails").post(postauthordetails);



module.exports = router;
