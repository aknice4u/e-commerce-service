const Customer = require("../Model/customer");
const { request } = require("express");
const axios = require('axios');
let mongoose = require('mongoose');

exports.AddCustomer = (req, res) => {
  const saveCustomer = new Customer({
        customer_name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        
        location: req.body.location,
        
    });
    saveCustomer.save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Could not save client"
            });
        });
}

exports.AllCustomers=(req,res) => {
    
    Customer.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Customers."
            });
        });
}

exports.SingleCustomer=(req, res) => {
    const id = req.params.id;

    Customer.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Customer Not Found " });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Could not get Customer with id=" + id });
        });
}

exports.UpdateCustomer =(req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Customer.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Customer with id=${id}.`
                });
            } else res.send({ message: "Customer was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Customer with id=" + id
            });
        });
}

exports.deleteCustomer=(req, res) => {
    
}

exports.placeOrder = (req,res) => {
    const url = "http://localhost:6060/create/order";
    const data = {
        customerId: req.body.customerId,
        productId: req.body.productId,
        amount: req.body.amount,
        quantity: req.body.quantity,
        reference: req.body.reference,
        orderStatus: "Pending"

    }
    axios.post(url, data).then((response) =>{
      res.send(response.data);
    }).catch(err => {
        res.status(500).send({
            message: err.message 
        });
    });
}
