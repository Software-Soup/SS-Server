const createError = require('http-errors');
const check = require('express-validator/check');

const controllerHandler = (promise, params) => async (req, res, next) => {
    let valErr = check.validationResult(req);
    if(!validationErrors.isEmpty())
    {
        let err = validationErrors.array();
        return next(createError(400, {message: err}));
    }

    let boundParams = params ? params(req, res, next) : [];
    try {
        let result = await promise(...boundParams);
        result.status = result.status || 200;
        return res.status(result.status).json(result);
    } catch (e) {
        return next(createError(500, e));
    }
}

module.exports = controllerHandler;