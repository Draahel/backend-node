const { ValidationError } = require('sequelize');

function logError(err, req, res, next) {
    console.error(err);
    next(err);
}

function boomHandlerError(err, req, res, next) {
    if (err.isBoom){
        const { output } = err;
        res.status(output.statusCode).json(output.payload);
    }else{
        next(err);
    }
}

function ormErrorHandler(err, req, res, next) {
    if (err instanceof ValidationError){
        res.status(409).json({
            statusCode: 409,
            message: err.name,
            error: err.errors
        })
    }
    next(err);
}

function handlerError(err, req, res, next) {
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    })
}

module.exports = {
    logError,
    boomHandlerError,
    handlerError,
    ormErrorHandler,
}