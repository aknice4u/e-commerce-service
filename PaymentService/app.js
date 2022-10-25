//require("dotenv").config();
const express = require('express');
const cors = require('cors');
const apirouting = require('./paymentRoutes.js');
const bodyParser = require('body-parser');
const amqp = require('amqplib');
const WorkerController = require('./Controllers/WorkerController'); 

const app = express();
//use body parser
//app.use(bodyParser.json());
app.use(cors());
WorkerController.ConfirmPayment();
console.log(Math.random().toString(36).slice(2, 16));
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use('/', apirouting);

const connectDB = require('./Config/dbconfig');
connectDB();

const PORT = process.env.PORT || 6500;

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
})