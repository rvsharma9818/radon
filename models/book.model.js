const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    authorid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "newauthor",
    },
    publisherid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "newPublisher",
    },
    ishardcore:{
      type:Boolean,
      default:false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("newBook", BookSchema);
