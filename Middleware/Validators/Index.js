const DemoValidator = require("./DemoValidator")
const ItemConsolidationValidator = require("./ItemConsolidationValidator")

module.exports = {
    ...DemoValidator,
    ...ItemConsolidationValidator
}