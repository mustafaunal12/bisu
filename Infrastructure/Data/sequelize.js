const { Sequelize, DataTypes, Model } = require('sequelize');

const coreLayer = require('../../Core/index');
const { host, user, password, database, dbDialect } = coreLayer.config.dbInfo;
const logger = coreLayer.logger;

const createSequelize = () => {
	return new Sequelize(database, user, password, {
		host: host,
		dialect: dbDialect,
		logging: msg => logger.debug(msg),
		define: {
			charset: 'utf8',
			collate: 'utf8_general_ci'
		}
	});
};

module.exports = {
	createSequelize,
	DataTypes,
	Model
};