/**
 * @swagger
 * /get/all-products:
 *   get:
 *     summary: Returns all Products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: 
 *       
 */
/**
 * @swagger
 * /create/product:
 *   post:
 *     summary: Create a Products
 *     tags: [Products]
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *                properties:
 *                  
 *                  product_name:
 *                   type: string
 *                  amount:
 *                   type: string
 *                  quantity:
 *                   type: string
 *                   
 *                  
 *     responses:
 *       200:
 *         description: Product Created,
 *       
 */

/**
 * @swagger
 * /get-single-product/{id}:
 *   get:
 *     summary: Get Product by Id
 *     tags: [Products]
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
 * /delete/product/{id}:
 *   delete:
 *     summary: Delete Product
 *     tags: [Products]
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
 * /update/product/{id}:
 *   put:
 *     summary: Update a Product
 *     tags: [Products]
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
 *                  product_name:
 *                   type: string
 *                  amount:
 *                   type: string
 *                  quantity:
 *                   type: string
 *                  
 *                                  
 *     responses:
 *       200:
 *         description:,
 *       
 */




 postRouter.get("/", (req, res) => {
    res.send(data);
  });