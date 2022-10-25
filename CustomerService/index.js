//require("dotenv").config();
const express = require('express');
const cors = require('cors');
const apirouting = require('./routes.js');
const bodyParser = require('body-parser');

const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const app = express();
//use body parser
//app.use(bodyParser.json());
app.use(cors());

app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use('/', apirouting);

const connectDB = require('./Config/dbconfig');
connectDB();

/* swagger Doc */

const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "E-commerce Service",
        version: "1.0.0",
        description: "API For Ecommerce Services",
       
      },
  
      servers: [
        {
          url: "http://localhost:4000",
          description: "Customer Service API Documentation",
        },
      ],
    },
    apis: ["./swagger/*.js"],
    
  };
  
  const specs = swaggerJsDoc(options);
  app.use("/", swaggerUI.serve, swaggerUI.setup(specs));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
})