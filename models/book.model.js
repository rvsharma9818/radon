const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  bookname: {
    type: String,
    required: true,
    unique: true,
  },
  authorname: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    remove: true,
    default: 100,
  },
  stockAvailable: {
    type: Boolean,
    default: true,
  },
  tags: {
    type: [String],
    enum:["INR","ENR"]
  },
  totalpages: {
    type: Number,
  },
  year: {
    type: String,
    default: new Date().getFullYear(),
  },
});

module.exports = mongoose.model("Book", BookSchema);
