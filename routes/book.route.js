const express = require("express");
const router = express.Router();

const {
  postbookdetails,
  getbookdetails,
  updatebookbypublishername,
  updatebookbyrating

} = require("../controllers/bookcontroller");

router.route("/getbook").get(getbookdetails);

router.route("/postbook").post(postbookdetails);

router.route("/updatetrue").put(updatebookbypublishername);


router.route("/updaterating").put(updatebookbyrating);


module.exports = router;
