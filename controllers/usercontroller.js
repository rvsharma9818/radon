const User = require("../models/user.model");

const jwt = require("jsonwebtoken");

exports.createUser = async (req, res) => {
  try {
    const emailid = await User.findOne({ emailid: req.body.emailid });

    if (emailid) return res.status(401).send("emailid already regeister");

    const mobile = await User.findOne({ mobile: req.body.mobile });

    if (mobile) return res.status(401).send("mobile already regeister");

    const data = new User(req.body);
    const result = await  data.save();

     res.status(200).send(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.loginuser = async (req, res) => {
  try {
    const emailid = await User.findOne({ emailid: req.body.emailid });

    if (emailid.isDeleted == true) return res.status(404).json("User not exist in database");

    if (!emailid) return res.status(401).send("emailid already regeister");

    const inputpassword = req.body.password;

    if (emailid.password !== inputpassword) return res.status(401).send("Password does not match");

    const accesToken = jwt.sign(
      {
        id: emailid._id,
        mobile: emailid.mobile,
      },
      process.env.JWT_SEC,      { expiresIn: "3d" }
    );
    const { password, ...others } = emailid._doc;
    return res.status(200).json({ ...others, accesToken });
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getuserdetails = async (req, res) => {
  try {
    const result = await User.findById(req.params.userid);

    if (result.isDeleted == true)
      return res.status(404).json("User not exist in database");

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};


exports.updateuserdetails = async (req, res) => {
  try {
    let user = await User.findById(req.params.userid);

    if (user.isDeleted == true) return res.status(404).json("User not exist in database");

    const data = {
      firstname: req.body.firstname || user.firstname,
      lastname: req.body.lastname || user.lastname,
      emailid: req.body.emailid || user.emailid,
      password: req.body.password || user.password,
      mobile: req.body.mobile || user.mobile,
      age: req.body.age || user.age,
      gender: req.body.gender || user.gender,
    };

    let user1 = await User.findByIdAndUpdate(req.params.userid, data, {
      new: true,
    });
    res.status(200).json(user1);

  } catch (error) {
    return res.status(500).json(error);
  }
};


exports.deleteuserdetails = async (req, res) => {
  try {
    let  result = await User.findById(req.params.userid);

    if (result.isDeleted == true) return res.status(404).json("User not exist in database");

    let result1 = await User.findByIdAndUpdate({_id:req.params.userid},{$set:{isDeleted:true}},{new:true} )

    return res.status(200).json(result1);
  } catch (error) {
    return res.status(500).json(error);
  }
};
