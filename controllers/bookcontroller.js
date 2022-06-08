const Book = require("../models/book.model");
const Author = require("../models/author.model");
exports.postbookdetails = async (req, res) => {
  try {
    const bookname = await Book.findOne({ name: req.body.name });
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

exports.updatebookdetails = async (req, res) => {
  try {
    let book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(401).json("Author not found");
    }
    const data = {
      name: req.body.name || book.name,
      price: req.body.price || book.price,
      rating: req.body.rating || book.rating,
      authorid: req.body.authorid || book.authorid,
    };
    book = await Book.findByIdAndUpdate(req.params.id, data, { new: true });
    return res.status(200).json("upadte succesflly", book);
  } catch (error) {
    return res.status(500).json(error);
  }
};
exports.getparticularbookdetails = async (req, res) => {
  try {
    const book = await Book.findOne(req.query.id);
    return res.status(200).json(book);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.deletebookdetails = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    return res.status(400).send("Book not found put the right id");
  }
  let del = await book.remove();
  res.status(200).json({
    success: true,
    message: "User deleted successfully",
    del,
  });
};

exports.getbookdetailsbyauthorname = async (req, res) => {
  try {
    const author = await Author.findOne({
      authorname: req.query.authorname,
    }).select({ authorname: 1 });
    if (!author) {
      return res.status(400).json("bookname not exist into database");
    }
    let id = author._id

    const book = await Book.find({ authorid: id}).select({name:1,_id:0})
    

    return res.status(200).json({
      success: true,
      authorname: author,
      booklist: book,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getbookdetailsbyname = async (req, res) => {
  try {
    let book = await Book.findOneAndUpdate({
      name: req.query.name,
    },{$set:{price:100}},{new:true})
    if (!book) {
      return res.status(400).json("bookname not exist into database");
    }
    let id = book.authorid

    const author = await Author.find({ _id:id}).select({authorname:1,_id:0})

    return res.status(200).json({
      success: true,
      booklist: book,
      authorname: author,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};


exports.getbooklessthanmore = async (req, res) => {
  try {
    let books = await Book
    .find({ price: { $gte: 50, $lte: 100 } })
    .select({ authorid: 1 ,name:1});

  books = books.map((book) => book.authorid);
  const authors = await Author.find({ _id: { $in: books } });
  let authorName = authors.map((name) => name.authorname);
 let  d = {}

  for (var i = 0; i < books.length; i++){

  
  d[books[i]] = authorName[i];
  }
  res.send({
    success:true,
    booklist1:books,

    booklist:d,
    author:authorName
  });
  } catch (error) {
    console.log(error)
    return res.status(500).json(error);
  }
};
