const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
  authorname:{
    type:String,
    required:true,
    unique:true
  },
  age:{
    type:Number,
    required:true
  },
  address:{
    type:String,
    required:true
  }
},{timestamps:true});

module.exports = mongoose.model("Author", AuthorSchema);
