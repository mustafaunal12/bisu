const express = require('express');

const swaggerSpec = require('./swagger');
const swaggerUi = require('swagger-ui-express');

const coreLayer = require('../../../Core/index');
const dataLayer = require('../../Data/index');

const index = require('./routes/index');
const order = require('./routes/order');
const subscription = require('./routes/subscription');

const responseHandlerMiddleware = require('./middlewares/responseHandler');

const logger = coreLayer.logger;
const { sequelize } = dataLayer.sequelize;

const app = express();
const port = 8081;

app.use(responseHandlerMiddleware);

app.use('/', index);
app.use('/getCustomerInfo', subscription);
app.use('/getSubscriptionOrders', order);

// Swagger UI
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Logs all requests
app.use(function (req, res, next) {
	logger.info({ path: req.route ? req.route.path : 'unhandled route', headers: req.headers, body: req.body, params: req.params }, 'REQUEST');
	next();
});

app.listen(port, async function () {
	logger.info('Listening on port ', port);

	try {
		await sequelize.authenticate();
		logger.info('Connection has been established successfully.');
	} catch (error) {
		logger.error('Unable to connect to the database:', error);
	}
});

app.on('uncaughtException', function (req, res, route, err) {
	logger.error(err);
});
