const bunyan = require('bunyan');
var Elasticsearch = require('bunyan-elasticsearch');
const fs = require('fs');

const { elasticsearch, appName, environment } = require('./config');

// create logs directory if not exists.
fs.existsSync('logs') || fs.mkdirSync('logs');

const fileLogger = bunyan.createLogger({
	name: appName,
	streams: [{
		type: 'rotating-file',
		path: 'logs/info.log',
		period: '1d',
		level: 'info',
		count: 3
	}, {
		type: 'rotating-file',
		path: 'logs/error.log',
		period: '1d',
		level: 'error',
		count: 7
	}, {
		type: 'rotating-file',
		path: 'logs/trace.log',
		period: '1d',
		level: 'trace',
		count: 3
	}]
});

//Elasticsearch settings
var esStream = new Elasticsearch({
	indexPattern: 'logs-bisu',
	index: 'logs-bisu',
	type: 'logs',
	host: elasticsearch,
});

esStream.on('error', function (err) {
	// eslint-disable-next-line no-console
	console.log('Elasticsearch is not available. ', err);
});

const esLogger = bunyan.createLogger({
	name: appName,
	environment: environment,
	serializers: bunyan.stdSerializers
});

const addStream = (logger, stream) => {
	try {
		logger.addStream({
			stream,
			name: 'Elastic',
			level: 'info'
		});
		return logger;
	} catch (err) {
		fileLogger.error(err);
		return fileLogger;
	}
};

module.exports = environment === 'test' ? fileLogger : addStream(esLogger, esStream);