const { StatusCodes } = require('http-status-codes');

class throwError extends Error {
    constructor(err) {
        super(err);
        this.status = StatusCodes.NOT_FOUND;
        this.message = err.message
        console.log("Error Status: " + this.status + " Error message: " + this.message);
    }
}

module.exports = throwError;
