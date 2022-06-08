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

exports.getparticularauthordetails = async (req, res) => {
  try {
    const author = await Author.findById(req.author.id);
    return res.status(200).json(author);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.updateauthordetails = async (req, res) => {
  try {
    let author = await Author.findById(req.params.id);
    if (!author) {
      return res.status(401).json("Author not found");
    }
    const data = {
      authorname: req.body.authorname || author.authorname,
      age: req.body.age || author.age,
      address: req.body.address || author.address,
    };
    author = await Author.findByIdAndUpdate(req.params.id, data, { new: true });
    return res.status(200).json("upadte succesflly", author);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.deleteauthordetails = async (req, res) => {
  const author = await Author.findById(req.params.id);
  if (!author) {
    return res.status(400).send("Author not found put the right id");
  }
  let del = await author.remove();
  res.status(200).json({
    success: true,
    message: "User deleted successfully",
    del,
  });
};
