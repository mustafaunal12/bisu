const bunyan = require('bunyan');
const fs = require('fs');

const { appName } = require('./config');

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

module.exports = fileLogger;