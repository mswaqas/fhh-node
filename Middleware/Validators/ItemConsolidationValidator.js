const {
    body,
    param
} = require('express-validator');

const WrapperValidator = require("./WrapperValidator");

exports.getConsolidationBoxSize = [
    body().isArray()
    .withMessage('Body Should be in array object'),

    body('*.width').exists().notEmpty()
    .withMessage('width is required')
    .isNumeric()
    .withMessage("width should be numeric"),

    body('*.length').exists().notEmpty()
    .withMessage('length is required')
    .isNumeric()
    .withMessage("length should be numeric"),

    body('*.height').exists().notEmpty()
    .withMessage('height is required')
    .isNumeric()
    .withMessage("height should be numeric"),

    WrapperValidator
];