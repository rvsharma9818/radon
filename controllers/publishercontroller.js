const Publisher = require("../models/publisher.model");

exports.postpublisherdetails = async (req, res) => {
  try {
    const name = await Publisher.findOne({
    name: req.body.name,
    });
    if (name) {
      return res.status(401).json("Publisher name already exist");
    }
    const data = new Publisher(req.body);
    const result = await data.save();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getpublisherdetails = async (req, res) => {
  try {
    const publisher = await Publisher.find();
    return res.status(200).json(publisher);
  } catch (error) {
    return res.status(500).json(error);
  }
};
