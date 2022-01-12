const Controller = require("./Controller")
const methods = require("../Helpers/Methods")

class IndexController extends Controller {
    //
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
IndexController.index = async (req, res) => {
    res.send(
        methods.successResponse(
            "Express JS API Boiler Plate working like a charm...", {
                data: "here comes you payload..."
            }
        )
    )
}

IndexController.indexPost = async (req, res) => {
    res.send(
        methods.successResponse(
            "Express JS API Boiler Plate post api working like a charm...", {
                data: "here comes you payload...",
                request: req.body
            }
        )
    )
}

module.exports = IndexController