const Book = require("../models/book.model");
const Author = require("../models/author.model");
const Publisher = require("../models/publisher.model");

exports.postbookdetails = async (req, res) => {
  try {
    let authorid = req.body.authorid;
    let author = await Author.findById(authorid);
    let publisherid = req.body.publisherid;
    let publisher = await Publisher.findById(publisherid);

    if (!authorid) return res.status(401).send("Authorid Fields is required");
    
    if (!author) return res.status(401).send("Authorid is not exist into database");
    
    if (!publisherid)  return res.status(401).send("Publisherid Fields is required");
   
    if (!publisher)  return res.status(401).send("Publisherid is not exist into database");
   
    let data = new Book(req.body);
    let result = await data.save();
    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.getbookdetails = async (req, res) => {
  try {
    const book = await Book.find().populate(["publisherid", "authorid"]);
    return res.status(200).json(book);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

exports.updatebookbypublishername = async (req, res) => {
  try {
    const publisher = await Publisher.find({
      name: { $in: ["HarperCollins", "Penguin"] },
    });
    const ids = publisher.map((ele) => ele._id);
    let book = await Book.updateMany(
      { publisherid:  {$in: ids}  },
      { $set: { ishardcore: true } },
      { new: true }
    );
    let book1 = await Book.find({ publisherid: { $in: ids } });

    return res.status(200).send(book1);
  } catch (error) {
    return res.status(500).send(error);
  }
};
exports.updatebookbyrating = async (req, res) => {
  try {
    const author = await Author.find({
      rating: { $gt:3.5 },
    });
    const ids = author.map((ele) => ele._id);
    let book = await Book.updateMany(
      { authorid: { $in: ids } },
      { $inc : { price: 10 }} ,
       
    );
    let book1 = await Book.find({ authorid: { $in: ids } });

    return res.status(200).send(book1);
  } catch (error) {
    return res.status(500).send(error);
  }
};
