/**
 * @swagger
 * /get/all-orders:
 *   get:
 *     summary: Returns all Orders
 *     tags: [Order]
 *     responses:
 *       200:
 *         description: 
 *       
 */
/**
 * @swagger
 * /create/order:
 *   post:
 *     summary: Create an Order
 *     tags: [Order]
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
 *                  quantity:
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
 * /delete/order/{id}:
 *   delete:
 *     summary: Delete Order
 *     tags: [Order]
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
 *         description: Order Deleted,
 *       
 */

 postRouter.get("/", (req, res) => {
    res.send(data);
  });