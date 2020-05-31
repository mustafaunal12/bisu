const express = require('express');

const coreLayer = require('../../../Core/index');

const index = require('./routes/index');
const customer = require('./routes/customer');
const subscription = require('./routes/subscription');

const responseHandlerMiddleware = require('./middlewares/responseHandler');

const logger = coreLayer.logger;

const app = express();
const port = 8081;

app.use(responseHandlerMiddleware);

app.use('/', index);
app.use('/getCustomerInfo', customer);
app.use('/getSubscriptionOrders', subscription);

app.use(function (req, res, next) {
	logger.info({ path: req.route.path, headers: req.headers, body: req.body, params: req.params }, 'REQUEST');
	next();
});

app.listen(port, async function () {
	logger.info('Listening on port ', port);
	// if (await mongo.connect(mongodbconnection)) {
	// 	logger.info('MongoDB connected');
	// } else {
	// 	logger.error(new Error('Mongo connection failed'));
	// }
});

app.on('uncaughtException', function (req, res, route, err) {
	logger.error(err);
});
