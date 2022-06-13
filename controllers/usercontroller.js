const user = require("../models/user.model");

exports.postuserdetails = async (req, res) => {
  try {
    const name = await user.findOne({ name: req.body.name });

    if (name) return res.status(401).send("User is already exist");
    const data = new user({
      name: req.body.name,
      age: req.body.age,
      address: req.body.address,
      balance: req.body.balance,
      gender: req.body.gender,
      isFreeAppUser: req.header('isFreeAppUser'),
    });

    let result = await data.save();

    return res.status(200).json(result);
  } catch (error) {
    console.log(error)
    return res.status(500).json(error);
  }
};

exports.getuserdetails = async (req, res) => {
  try {
    const result = await user.find();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};
