const express = require("express");
const router = express.Router();

const {
  postorder,
  getorder
} = require("../controllers/ordercontroller");

router.route("/getorderdetails").get(getorder);

router.route("/postorderdetails").post(postorder);



module.exports = router;
