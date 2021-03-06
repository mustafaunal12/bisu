module.exports = {
	domain: {
		subscription: require('./domains/subscription'),
		order: require('./domains/order'),
		orderProduct: require('./domains/orderProduct')
	},
	resources: {
		responseCodes: require('./resources/responseCodes')
	},
	service: {
		subscription: require('./services/subscription'),
		order: require('./services/order'),
		common: require('./services/common')
	},
	config: require('./config'),
	logger: require('./logger')
};