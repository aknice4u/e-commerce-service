const Product = require("../Models/product");
const { request } = require("express");

exports.AddProduct = (req, res) => {
  const saveProduct = new Product({
        product_name: req.body.product_name,
        amount: req.body.amount,
        quantity: req.body.quantity,
       
    });
    saveProduct.save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Could not save Product"
            });
        });
}

exports.AllProducts=(req,res) => {
    
    Product.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Products."
            });
        });
}

exports.SingleProduct=(req, res) => {
    const id = req.params.id;

    Product.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Product Not Found " });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Could not get Product with id=" + id });
        });
}

exports.UpdateProduct =(req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Product.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Product with id=${id}.`
                });
            } else res.send({ message: "Product was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Product with id=" + id
            });
        });
}

exports.deleteProduct=(req, res) => {
    
}