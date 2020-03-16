const productCtl=require("../controllers/product.controllers");

module.exports = app => {
    app.post("/api/products/new", productCtl.createProduct);
    app.get("/api/products", productCtl.showAllProducts);
    app.get("/api/products/:id", productCtl.showOneProduct);
    app.put("/api/products/:id/edit", productCtl.editProduct);
    app.delete("/api/products/:id",productCtl.deleteProduct);
};  