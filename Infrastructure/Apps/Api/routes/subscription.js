var router = require('express').Router();

const coreLayer = require('../../../../Core/index');
const logger = coreLayer.logger;

router.post('/:subscriptionId', function (req, res, next) {
	try {
		console.log('getSubscriptionOrders', req.params.subscriptionId);
	} catch (ex) {
		res.exceptionHandler(ex, logger);
	}
	next();
});

module.exports = router;