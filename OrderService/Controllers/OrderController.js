const Order = require("../Models/order");
const { request } = require("express");
let mongoose = require('mongoose');
const axios = require('axios');

exports.AddOrder = (req, res) => {
  const saveOrder = new Order({
        customerId: mongoose.Types.ObjectId(req.body.customerId),
        productId: mongoose.Types.ObjectId(req.body.productId),
        reference: req.body.reference,
        amount: req.body.amount,
        quantity: req.body.quantity,
                
    });
    saveOrder.save()
        .then(data => {
            res.send(data);
        }).then(results =>{

    const url = "http://localhost:6500/new/payment";
    const data = {
        customerId: mongoose.Types.ObjectId(req.body.customerId),
        productId: mongoose.Types.ObjectId(req.body.productId),
        amount: req.body.amount,
        reference: req.body.reference,
        quantity: req.body.quantity,
        paymentStatus: "Pending"

    }
    axios.post(url, data).then((response) =>{
      res.send(response.data);
    })
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Could not save client"
            });
        });
}

exports.AllOrders=(req,res) => {
    
    Order.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Customers."
            });
        });
}

exports.deleteOrder=(req, res) => {
    
}