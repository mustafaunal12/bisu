const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
	info: {
		title: 'bisu api documentation',
		version: require('./package.json').version,
		description: 'This is the REST API for bisu api'
	},
	basePath: '/',
};

const options = {
	swaggerDefinition,
	apis: ['./docs/swagger/*.yaml'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;