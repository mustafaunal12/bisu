var router = require('express').Router();

const coreLayer = require('../../../../Core/index');
const dataLayer = require('../../../Data/index');

const logger = coreLayer.logger;
const subscriptionDataAccess = dataLayer.models.subscription;

const subscriptionService = coreLayer.service.subscription({ subscriptionDataAccess });

router.post('/:phoneNumber', async function (req, res, next) {
	try {
		const response = await subscriptionService.get(req.params.phoneNumber);
		res.handle(response);
	} catch (ex) {
		res.exceptionHandler(ex, logger);
	}
	next();
});

module.exports = router;