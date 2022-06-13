const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    
    userid: {
      type: String
    },
    productid: {
      type: String
    },
    isFreeAppUser:{
      type:Boolean,
      default:false
    },
    amount:{
      type:Number
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", OrderSchema);
