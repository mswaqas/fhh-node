const ItemConsolidationController = require('../Controllers/ItemConsolidationController')

module.exports = function (app, authMiddleware, validators) {
    app.post('/api/consolidation/box-size',
        validators.getConsolidationBoxSize,
        ItemConsolidationController.getConsolidationBoxSize
    )
}