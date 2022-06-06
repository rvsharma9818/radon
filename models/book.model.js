const mongoose = require('mongoose');


const BookSchema = new mongoose.Schema({
bookname:{
    type:String,
    required:true,
    unique:true

},
authorname:{
    type:String,
    required:true,
},
category:{
    type:String,
    required:true
},
year:{
    type:String,
    default: new Date().getFullYear()
}

})


module.exports = mongoose.model('Book',BookSchema);