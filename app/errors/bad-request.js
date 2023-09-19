const {StatusCodes} = require('http-status-codes');
const customAPIError = require('./custom-api-error');

class BadRequest extends customAPIError {
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.BAD_REQUEST;
    }
}

module.exports = BadRequest;