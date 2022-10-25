const { request } = require("express");
const amqp = require('amqplib');
const Pay = require("../Models/payment");
let mongoose = require('mongoose');
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

var channels, connections;

async function connect() {
    const amqpServer = "amqp://localhost";
    connections = await amqp.connect(amqpServer);
    channels = await connections.createChannel();
    await channels.assertQueue("WORKER");
}
exports.ConfirmPayment=(req,res) => {
    
    connect().then(() => {
        channels.consume("WORKER", (data) => {
            var items = JSON.parse(data.content)
            const savePayment = new Pay({
                customerId: mongoose.Types.ObjectId(items.customerId),
                productId: mongoose.Types.ObjectId(items.productId),
                amount: items.amount,
                paymentStatus: "Confirmed",
                        
            });
            var custId = Pay.find({customerId: items.customerId}); 
            
            var id = mongoose.Types.ObjectId(items.id);
            custId.customerId = mongoose.Types.ObjectId(items.customerId);
            custId.productId = mongoose.Types.ObjectId(items.productId);
            custId.amount = items.amount;
            custId.paymentStatus = "Confirmed"
            console.log("Consuming Payment ORDER");
           
            var query = {'_id': mongoose.Types.ObjectId(items.id)};
            
            Pay.findOne({_id: mongoose.Types.ObjectId(items.id)}, function(err, paying) {
                paying.paymentStatus = "Confirmed";
                paying.paymentDate = new Date();
                paying.save();
                
            });
            //custId.save();
            channels.ack(data);
            channels.sendToQueue(
                "PAYMENT",
                Buffer.from(JSON.stringify({ savePayment }))
            );
        });
    });
}
