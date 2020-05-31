var router = require('express').Router();

router.get('', function (req, res, next) {
	res.json({
		message: 'Welcome to BiSu API'
	});
	next();
});

module.exports = router;