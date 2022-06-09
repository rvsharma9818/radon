const express = require("express");
const router = express.Router();

const {
  postpublisherdetails,
  getpublisherdetails
} = require("../controllers/publishercontroller");

router.route("/getpublisher").get(getpublisherdetails);

router.route("/postpublisher").post(postpublisherdetails);


module.exports = router;
