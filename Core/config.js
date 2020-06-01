module.exports = {
	elasticsearch: process.env.ELASTICSEARCH,
	environment: process.env.ENVIRONMENT,
	appName: process.env.APPNAME,
	logger: process.env.LOGGER,
	dblInfo: {
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		dbDialect: process.env.DB_DIALECT
	}
};