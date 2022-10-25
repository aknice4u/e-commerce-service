const Ord = require("./Controllers/OrderController.js");
var router = require("express").Router();
const fs = require('fs');

/* Customers Routes*/
router.post("/create/order", Ord.AddOrder);
router.get("/get/all-orders", Ord.AllOrders);
router.delete("/delete/order", Ord.deleteOrder);


module.exports = router