const {
    validationResult
} = require('express-validator');

const methods = require('../../Helpers/Methods');

module.exports = (req, res, next) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).send(methods.errorResponse({
            errors: errors.array()
        }));
        return;
    }
    next();
}