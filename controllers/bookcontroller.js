const Book = require('../models/book.model')

exports.postbookdetails = async (req,res)=>{
try {
    const bookname = await Book.findOne({bookname:req.body.bookname});
    if(bookname){
        return res.status(401).json('Book name already exist')
    }
    const data = new Book(req.body)
    const result = await data.save();
    return res.status(200).json(result);
} catch (error) {
    return res.status(500).json(error);
}

}

exports.getbookdetails = async (req,res)=>{
    try {
        const bookname = await Book.find();
        return res.status(200).json(bookname);
    } catch (error) {
        return res.status(500).json(error);
    }
    
    }