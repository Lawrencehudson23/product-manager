const Product = require('../models/product.models');


module.exports.createProduct = (req,res) => {
    Product.create(req.body)
      .then(product=>res.json(product))
      .catch(err=>res.json({message:"cant create product", error:err}));      
};

module.exports.showAllProducts = (req,res)=> {
  Product.find()
    .then(products=>res.json(products))
    .catch(err=>res.json(err));
    
}

module.exports.showOneProduct =(req,res) => {
  const productId = req.params.id;
  Product.findById(productId)
    .then(product=>res.json(product))
    .catch(err=>res.json({message:"cant find by id",error:err}));
    
}
module.exports.editProduct =( req,res ) => {
  Product.findByIdAndUpdate({_id:req.params.id},{title:req.body.title, price:req.body.price, description:req.body.description}, {new:true, runValidators:true})
    .then(product=>res.json(product))
    .catch(err=>res.json({message:"cant edit",error:err}));
    
};
module.exports.deleteProduct = (req,res) => {
  Product.findByIdAndDelete({_id:req.params.id})
    .then(result=>res.json(result))
    .catch(err=>res.json(err));    
};
