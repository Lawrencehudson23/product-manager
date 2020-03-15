const Product = require('../models/product.models');


module.exports.createProduct = (req,res) => {
    Product.create(req.body)
      .then(product=>res.json(product))
      .catch(err=>res.json({message:"cant create product", error:err}));      
};

