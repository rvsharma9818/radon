const express = require("express");
const router = express.Router();

const {
  postproductdetails,
  getproductdetails
} = require("../controllers/productcontroller");

router.route("/getproductdetails").get(getproductdetails);

router.route("/postproductdetails").post(postproductdetails);



module.exports = router;
