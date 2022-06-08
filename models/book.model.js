const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
    unique:true
  },
  price:{
    type:Number,
    required:true
  },
  rating:{
    type:Number,
    required:true
  },
  authorid:{
    type:mongoose.Schema.Types.ObjectId,
    required:true
  }
},{timestamps:true});

module.exports = mongoose.model("Book", BookSchema);
