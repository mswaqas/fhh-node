class ItemConsolidationLogic {}

/**
 * 
 * @param {*} data 
 * @returns 
 */
ItemConsolidationLogic.getBoxSize = async (data) => {
    console.log(data); // just for the checking purpose.
    let boxes = [{
            'box_type': "Mailing",
            'dimension_unit': "inches",
            "length": 4,
            "width": 4,
            "height": 2
        },
        {
            'box_type': "Mailing",
            'dimension_unit': "inches",
            "length": 6,
            "width": 6,
            "height": 2
        },
        {
            'box_type': "Mailing",
            'dimension_unit': "inches",
            "length": 8,
            "width": 5,
            "height": 3
        },
        {
            'box_type': "Shipping",
            'dimension_unit': "inches",
            "length": 14,
            "width": 14,
            "height": 12
        },
        {
            'box_type': "Shipping",
            'dimension_unit': "inches",
            "length": 16,
            "width": 14,
            "height": 14
        },
        {
            'box_type': "Shipping",
            'dimension_unit': "inches",
            "length": 20,
            "width": 18,
            "height": 12
        }
    ] // box sizes array

    return boxes[Math.floor(Math.random() * 5)]; // it will select box size randomly
}

module.exports = ItemConsolidationLogic