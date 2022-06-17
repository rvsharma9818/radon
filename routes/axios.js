const express = require("express");
const router = express.Router();
const {
getStates,
memehandler,
getvaccine

} = require("../controllers/axioscontroller");


router.route("/getStates").get(getStates);
router.route("/getvac").get(getvaccine);

router.route("/meme").post(memehandler);


module.exports = router;
