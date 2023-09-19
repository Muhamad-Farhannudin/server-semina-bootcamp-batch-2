const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("./custom-api-error");

class notFound extends CustomAPIError {
  constructor(message) {
    super(message);

    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

module.exports = notFound;
