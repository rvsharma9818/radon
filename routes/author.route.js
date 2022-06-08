const express = require("express");
const router = express.Router();

const {
  postauthordetails,
  getauthordetails,
  getparticularauthordetails,
  updateauthordetails,
  deleteauthordetails,
} = require("../controllers/authorcontroller");

router.route("/getauthordetails").get(getauthordetails);

router.route("/postauthordetails").post(postauthordetails);

router.route("/getparticularauthordetails/:id").get(getparticularauthordetails);

router.route("/updateauthordetails/:id").put(updateauthordetails);

router.route("/deleteauthordetails/:id").delete(deleteauthordetails);


module.exports = router;
