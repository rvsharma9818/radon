const express = require("express");
const router = express.Router();

const {
  postbookdetails,
  getbookdetails,
  updatebookdetails,
  getparticularbookdetails,
  deletebookdetails,
  getbookdetailsbyauthorname,
  getbooklessthanmore,
  getbookdetailsbyname
} = require("../controllers/bookcontroller");

router.route("/getbook").get(getbookdetails);

router.route("/postbook").post(postbookdetails);

router.route("/updatebookdetails/:id").put(updatebookdetails);
router.route("/getparticularbookdetails/:id").get(getparticularbookdetails);
router.route("/deletebookdetails/:id").delete(deletebookdetails);
router.route("/getbookdetailsbyauthorname").get(getbookdetailsbyauthorname);
router.route("/getbookdetailsbyname").get(getbookdetailsbyname);

router.route("/getbooklessthanmore").get(getbooklessthanmore);

module.exports = router;
