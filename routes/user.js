const express = require("express");
const router = express.Router();
const { verifyToken,verifyTokenAndAuthorization } = require('../middleware/middleware')
const {
  createUser,
  loginuser,
  updateuserdetails,
  getuserdetails,
  deleteuserdetails
} = require("../controllers/usercontroller");

router.route("/getuser/:userid").get(verifyTokenAndAuthorization,getuserdetails);

router.route("/regestriation").post(createUser);

router.route("/login").post(loginuser);

router.route("/updateuser/:userid").put(verifyTokenAndAuthorization,updateuserdetails);

router.route("/deleteuser/:userid").delete(verifyTokenAndAuthorization,deleteuserdetails);




module.exports = router;
