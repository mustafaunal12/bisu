const { Sequelize, DataTypes, Model } = require('sequelize');

const coreLayer = require('../../Core/index');
const { host, user, password, database, dbDialect } = coreLayer.config.dblInfo;
const logger = coreLayer.logger;

const sequelize = new Sequelize(database, user, password, {
	host: host,
	dialect: dbDialect,
	logging: msg => logger.debug(msg),
	define: {
		charset: 'utf8',
		collate: 'utf8_general_ci'
	}
});

module.exports = {
	sequelize,
	DataTypes,
	Model
}