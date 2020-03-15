const productCtl=require("../controllers/product.controllers");

module.exports = app => {
    app.post("/api/products", productCtl.createProduct);
    
}