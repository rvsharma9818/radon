const mongoose = require("mongoose");

const Connectdatabase = () =>{
mongoose.connect('mongodb://localhost:27017/Bookproject',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((data) =>{
    console.log(`mongodb is connected with serve: ${data.connection.host}`);
})
}


module.exports = Connectdatabase;