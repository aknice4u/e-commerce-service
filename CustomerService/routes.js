const Cust = require("./Controllers/CustomerController.js");
var router = require("express").Router();
const fs = require('fs');

/* Customers Routes*/
router.post("/create/customer", Cust.AddCustomer);
router.get("/get-single-customer/:id", Cust.SingleCustomer);
router.get("/get/all-customers", Cust.AllCustomers);
router.put("/update/customer/:id", Cust.UpdateCustomer);
router.delete("/delete/customer", Cust.deleteCustomer);
router.post("/place/order", Cust.placeOrder);

module.exports = router