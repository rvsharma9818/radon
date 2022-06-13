const User = require("../models/user.model");
const Product = require("../models/product.model");
const Order = require("../models/order.model");

exports.postorder = async (req, res) => {
  try {
    const userid = await User.findOne({ _id: req.body.userid });
    const productid = await Product.findOne({ _id: req.body.productid });
    if (!userid) return res.status(401).send("User is not Present in db");
    if (!productid) return res.status(401).send("Product is not Present in db");
    var price = 0;
    if (req.header('isFreeAppUser')== true) {
      const data = new Order({
        userid: req.body.userid,
        productid: req.body.productid,
        amount: price,
        isFreeAppUser: req.header('isFreeAppUser'),
      });

      let result = await data.save();
      return res.status(200).send(result);
    } else {
      if (userid.balance < productid.price) {
        return res.status(401).json("INsufficient balance");
      } else {
        price = productid.price;
        var balance = userid.balance - productid.price;
      }

      const data = new Order({
        userid: req.body.userid,
        productid: req.body.productid,
        amount: price,
        isFreeAppUser: req.header('isFreeAppUser'),
      });

      const user = await User.findByIdAndUpdate(
        { _id: req.body.userid },
        { $set: { balance: balance } },
        { new: true }
      );
      let result = await data.save();

      return res.status(200).json({
        "msg":result,
        user
      });
    }
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.getorder = async (req, res) => {
  try {
    const result = await Order.find();
    return res.status(200).send(result);
  } catch (error) {
    return res.status(200).send(error);
  }
};
