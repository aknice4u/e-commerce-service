const Pay = require("./Controllers/PaymentController.js");
const Work = require("./Controllers/workerController.js");

var router = require("express").Router();

/* Customers Routes*/
router.post("/new/payment", Pay.NewPayment);
//router.get("/get-single-payment/:id", Pay.SinglePayment);
router.get("/get/all-payments", Pay.AllPayments);
router.post("/confirm/payment", Work.ConfirmPayment);


module.exports = router