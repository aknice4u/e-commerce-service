const Prod = require("./Controllers/ProductController.js");
var router = require("express").Router();

/* Customers Routes*/
router.post("/create/product", Prod.AddProduct);
router.get("/get-single-product/:id", Prod.SingleProduct);
router.get("/get/all-products", Prod.AllProducts);
router.put("/update/product/:id", Prod.UpdateProduct);
router.delete("/delete/product", Prod.deleteProduct);


module.exports = router