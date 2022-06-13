const Product = require("../models/product.model");

exports.postproductdetails = async (req, res) => {
  try {
    const result = new Product(req.body);
    const result1=await result.save();
    return res.status(200).send(result1)
    
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getproductdetails = async (req, res) => {
  try {
    const product = await Product.find();
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json(error);
  }
};
