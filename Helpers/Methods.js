/**
 *
 * @param message
 * @param payload
 * @returns {{package, message, status: boolean}}
 */
exports.successResponse = (message, payload) => {
    return {
        status: true,
        message: message,
        payload: payload
    }
}

/**
 *
 * @param message
 * @returns {{message, status: boolean}}
 */
exports.errorResponse = (message) => {
    return {
        status: false,
        message: message
    }
}