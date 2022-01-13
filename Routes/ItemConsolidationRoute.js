const ItemConsolidationController = require('../Controllers/ItemConsolidationController')

/**
 * 
 * @param {*} app 
 * @param {*} authMiddleware 
 * @param {*} validators 
 */

module.exports = function (app, authMiddleware, validators) {
    /**
     * @swagger
     *  components:
     *      schemas:
     *          Items:
     *              type:   object
     *              required:
     *                  - width
     *                  - length
     *                  - height
     *              properties:
     *                  width:
     *                      type: numeric
     *                      description: item width should be in numeric format
     *                  length:
     *                      type: numeric
     *                      description: item length should bein numeric format
     *                  height: 
     *                      type: numeric
     *                      description: item height should be in numeric format
     *              example:
     *                  width: 10.5
     *                  length: 5.9
     *                  height: 3.5
     *                  
     */

    /**
     * @swagger
     * /api/consolidation/box-size:
     *  post:
     *      summary:    Get Items Consolidation Box Size
     *      description:    This api will take the multiple items dimensions & will suggest the consolidation box size
     *      requestBody:
     *          content:
     *              application/json:
     *                  schema:
     *                      type: array
     *                      items:
     *                          $ref: '#/components/schemas/Items'
     *      responses:
     *          200:
     *              description: will return consolidation box size
     */
    app.post('/api/consolidation/box-size',
        validators.getConsolidationBoxSize,
        ItemConsolidationController.getConsolidationBoxSize
    )
}