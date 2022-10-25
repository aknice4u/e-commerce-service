/**
 * @swagger
 * /get/all-customers:
 *   get:
 *     summary: Returns all Customers
 *     tags: [Customers]
 *     responses:
 *       200:
 *         description: displays all Customers
 *       
 */
/**
 * @swagger
 * /create/customer:
 *   post:
 *     summary: Create a Customer
 *     tags: [Customers]
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *                properties:
 *                  
 *                  customer_name:
 *                   type: string
 *                  email:
 *                   type: string
 *                  phone:
 *                   type: string
 *                  address:
 *                   type: string
 *                  location:
 *                   type: string
 *                   
 *                  
 *     responses:
 *       200:
 *         description: Customer Created,
 *       
 */

/**
 * @swagger
 * /get-single-customer/{id}:
 *   get:
 *     summary: Get Customer by Id
 *     tags: [Customers]
 *     parameters: 
 *         - in: path
 *           name: id
 *           required: true
 *     schema:
 *        type: integer
 *     
 *                
 *     responses:
 *       200:
 *         description: ,
 *       
 */

/**
 * @swagger
 * /delete/customer/{id}:
 *   delete:
 *     summary: Delete Customers
 *     tags: [Customers]
 *     parameters: 
 *         - in: path
 *           name: id
 *           required: true
 *     schema:
 *        type: integer
 *     
 *                
 *     responses:
 *       200:
 *         description: ,
 *       
 */

/**
 * @swagger
 * /update/customer/{id}:
 *   put:
 *     summary: Update Customer Info
 *     tags: [Customers]
 *     parameters: 
 *         - in: path
 *           name: id
 *           required: true
 *     schema:
 *        type: integer
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *                 properties:
 *                 
 *                  customer_name:
 *                   type: string
 *                  email:
 *                   type: string
 *                  phone:
 *                   type: string
 *                  address:
 *                   type: string
 *                  location:
 *                   type: string
 *                                  
 *     responses:
 *       200:
 *         description: Customer Updated,
 *       
 */

/**
 * @swagger
 * /place/order:
 *   post:
 *     summary: Place an Order
 *     tags: [Customers]
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *                properties:
 *                  
 *                  customerId:
 *                   type: string
 *                  productId:
 *                   type: string
 *                  amount:
 *                   type: string
 *                  orderStatus:
 *                   type: string
 *                  reference:
 *                   type: string
 *                                     
 *                  
 *     responses:
 *       200:
 *         description: Order Placed,
 *       
 */




 postRouter.get("/", (req, res) => {
    res.send(data);
  });