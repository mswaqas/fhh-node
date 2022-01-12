const {
    body,
    param
} = require('express-validator');
const WrapperValidator = require("./WrapperValidator");

exports.demoValidator = [
    body('name')
    .exists()
    .notEmpty()
    .withMessage('name is required')
    .isString()
    .withMessage('name be in string.'),
    WrapperValidator
];