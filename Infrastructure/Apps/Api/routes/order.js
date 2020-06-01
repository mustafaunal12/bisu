var router = require('express').Router();

const coreLayer = require('../../../../Core/index');
const dataLayer = require('../../../Data/index');

const logger = coreLayer.logger;
const orderDataAccess = dataLayer.models.order;
const orderProductDataAccess = dataLayer.models.orderProduct;

const orderService = coreLayer.service.order({ orderDataAccess, orderProductDataAccess });

router.post('/:subscriptionId', async function (req, res, next) {
	try {
		const response = await orderService.get(req.params.subscriptionId);
		response.handle(response);
	} catch (ex) {
		res.exceptionHandler(ex, logger);
	}
	next();
});

module.exports = router;