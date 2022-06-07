const Book = require("../models/book.model");

exports.postbookdetails = async (req, res) => {
  try {
    const bookname = await Book.findOne({ bookname: req.body.bookname });
    if (bookname) {
      return res.status(401).json("Book name already exist");
    }
    const data = new Book(req.body);
    const result = await data.save();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getbookdetails = async (req, res) => {
  try {
    const bookname = await Book.find();
    return res.status(200).json(bookname);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.bookdetails = async (req, res) => {
  try {
    let allBooks = await Book.find().select({
      bookname: 1,
      authorname: 1,
      _id: 0,
    });
    return res.status(200).send(allBooks);
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.getBooksInYear = async (req, res) => {
  try {
    let year = new RegExp(req.params.year, "i");
    let result = await Book.find({ year: year });
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getParticularBooks = async (req, res) => {
  try {
    let para = req.query.field;
    let result = await Book.find({
      $or: [
        { authorname:para  },
        { bookname:  para  },
        { category:para  },
        { tags: [para]  },
      ],
    });
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getXINRBooks = async (req, res) => {
  try {
    let result = await Book.find({
      $or: [
        { $and: [{ tags: ["INR"] }, { price: 100 }] },
        { $and: [{ tags: ["INR"] }, { price: 200 }] },
        { $and: [{ tags: ["INR"] }, { price: 500 }] },
      ],
    });
    return res.status(200).json(result);
  } catch (error) {
      console.log(error)
    return res.status(500).json(error);
  }
};
exports.getRandomBooks = async (req, res) => {
  try {
    let result = await Book.find({ totalpages: { $gt: 500 } });
    console.log(result)
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};
