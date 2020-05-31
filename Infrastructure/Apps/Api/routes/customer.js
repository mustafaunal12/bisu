var router = require('express').Router();

const coreLayer = require('../../../../Core/index');
const logger = coreLayer.logger;

router.post('/:phoneNumber', function (req, res, next) {
	try {
		console.log('getCustomerInfo', req.params.phoneNumber);
		// response.success ? res.success(response) : res.error(200, response);
		res.success([
			{
				subscriptionId: '1',
				fullname: 'mustafa ünal',
				address: 'hacıosmanoğlu',
				locationName: 'türkali',
				subCityName: 'beşiktaş',
				cityName: 'istanbul',
				brand: 'sırma',
				phoneNumber: '5056305546',
				distributorNumber: '2124394949'
			}
		]);
	} catch (ex) {
		res.exceptionHandler(ex, logger);
	}
	next();
});

module.exports = router;