const Author = require("../models/author.model");

exports.postauthordetails = async (req, res) => {
  try {
    const authorname = await Author.findOne({
      authorname: req.body.authorname,
    });
    if (authorname) {
      return res.status(401).json("Authorname name already exist");
    }
    const data = new Author(req.body);
    const result = await data.save();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getauthordetails = async (req, res) => {
  try {
    const author = await Author.find();
    return res.status(200).json(author);
  } catch (error) {
    return res.status(500).json(error);
  }
};
