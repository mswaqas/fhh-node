class ItemConsolidationLogic {}

/**
 * 
 * @param {*} data 
 * @returns 
 */
ItemConsolidationLogic.getBoxSize = async (data) => {
    console.log(data); // just for the checking purpose.
    return require('../Config/StandardBoxSizes')[Math.floor(Math.random() * 5)]; // it will select box size randomly
}

module.exports = ItemConsolidationLogic