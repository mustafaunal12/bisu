const { createSequelize, DataTypes } = require('../sequelize');

const { sequelizeMock } = require('../sequelize-mock');

const OrderSchema = require('./order');

const coreLayer = require('../../../Core/index');
const { environment } = coreLayer.config;

const OrderProduct = coreLayer.domain.orderProduct;

const dbConnection = environment === 'test' ? sequelizeMock : createSequelize();

const OrderProductSchema = dbConnection.define('orderProduct', {
	orderProductId: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true
	},
	orderId: {
		type: DataTypes.STRING,
		references: {
			model: OrderSchema,
			key: 'orderId'
		}
	},
	product: {
		type: DataTypes.STRING,
		allowNull: false
	},
	quantity: {
		type: DataTypes.INTEGER,
		allowNull: false
	}
}, {
	timestamps: false
});

const domainConvertor = function (model) {
	if (!model) {
		return model;
	}
	return Array.isArray(model) ?
		model.map(c => domainConvertor(c))
		: OrderProduct(
			model.orderProductId,
			model.orderId,
			model.product,
			model.quantity
		);
};

const save = async function (domain) {
	const orderProduct = OrderProductSchema.create(domain);
	return domainConvertor(orderProduct);
};

const fetch = async function (condition) {
	const orderProduct = await OrderProductSchema.findAll({ where: condition });
	return domainConvertor(orderProduct);
};

const remove = async function (id) {
	return await OrderProductSchema.destroy({
		where: {
			orderProductId: id
		}
	});
};

module.exports = {
	save,
	fetch,
	remove
};