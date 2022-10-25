const Payment = require("../Models/payment");
const { request } = require("express");
const amqp = require('amqplib');
let mongoose = require('mongoose');
var channel, connection;

async function conn() {
    const amqpServer = "amqp://localhost";
    connection = await amqp.connect(amqpServer);
    channel = await connection.createChannel();
    await channel.assertQueue("PAYMENT");
}
conn();

exports.NewPayment = (req, res) => {
  const savePayment = new Payment({
        customerId: mongoose.Types.ObjectId(req.body.customerId),
        productId: mongoose.Types.ObjectId(req.body.productId),
        amount: req.body.amount,
        reference: req.body.reference,
        paymentStatus: "In Progress",
                
    });
    savePayment.save()
        .then(data => {
            res.send(data);
            //console.log(data.id);
            channel.sendToQueue(
                "WORKER",
                Buffer.from(
                    JSON.stringify({
                    id: mongoose.Types.ObjectId(data.id),
                    customerId: mongoose.Types.ObjectId(data.customerId),
                    productId: mongoose.Types.ObjectId(data.productId),
                    reference: data.reference,
                    amount: data.amount,
                    paymentStatus: "Confirmed",
                
                    })
                )
            );
            
            channel.consume("PAYMENT", (data) => {
                order = JSON.parse(data.content);
            });
            
        })
        .catch(err => {
            console.log(err);
        });
}

exports.AllPayments=(req,res) => {
    
    Payment.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Customers."
            });
        });
}



/*async function connect()
{
 const amqpServer = await amqp.connect('amqp://localhost');
 channel = await amqpServer.CreateChannel();
 await channel.assertQueue('ORDER')
}
channel.sendToQueue('Worker', Buffer.from(json.stringify({
    datafromDatabase,
    email:req.user.email
})
)
)*/


