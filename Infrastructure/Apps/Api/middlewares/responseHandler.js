const coreLayer = require('../../../../Core/index');
const { responseCodeDescriptions, responseCodes } = coreLayer.resources.responseCodes;
const logger = coreLayer.logger;

const customizeArgumentRequiredError = ex => `'${ex.message.split(':')[1].trim()}' zorunlu alandır.`;

const responseHandler = function (req, res, next) {
	res.exceptionHandler = function (ex) {
		logger.error(ex);
		ex.name === 'ArgumentRequiredError' ?
			res.json(400, { message: customizeArgumentRequiredError(ex) }) :
			res.json(500, { message: responseCodeDescriptions[responseCodes.fatal_error] });
	};
	res.success = function (responseObject) {
		res.json(200, responseObject);
	};
	res.error = function (responseObject) {
		logger.warn(responseObject);
		res.json(responseObject.responseCode, { message: responseObject.responseMessage });
	};
	next();
};

module.exports = responseHandler;