const Controller = require("./Controller")
const methods = require("../Helpers/Methods")
const ItemConsolidationLogic = require("../Logic/ItemConsolidationLogic")

class ItemConsolidationController extends Controller {
    //
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
ItemConsolidationController.getConsolidationBoxSize = async (req, res) => {
    res.send(
        methods.successResponse(
            "Items Consolidaton Box Size", await ItemConsolidationLogic.getBoxSize(req.body)
        )
    )
}

module.exports = ItemConsolidationController