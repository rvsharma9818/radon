const express = require("express");
const router = express.Router();
const { verifyToken } = require('../middleware/middleware')
const {
  createUser,
  loginuser,
  updateuserdetails,
  getuserdetails,
  deleteuserdetails
} = require("../controllers/usercontroller");

router.route("/getuser/:userid").get(verifyToken,getuserdetails);

router.route("/regestriation").post(createUser);

router.route("/login").post(loginuser);

router.route("/updateuser/:userid").put(verifyToken,updateuserdetails);

router.route("/deleteuser/:userid").delete(verifyToken,deleteuserdetails);




module.exports = router;
