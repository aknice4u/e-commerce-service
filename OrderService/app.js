//require("dotenv").config();
const express = require('express');
const cors = require('cors');
const apirouting = require('./orderRoutes.js');

const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const app = express();
app.use(cors());


app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded on
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


const PORT = process.env.PORT || 6060;

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
})