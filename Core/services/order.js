const required = require('argument-required');

const { responseCodes } = require('../resources/responseCodes');
const { successResponse, errorResponse } = require('./common');

/**
 * Returns Get function
 * @param {DataAccess} orderDataAccess - Data access object for order
 * @param {DataAccess} orderProductDataAccess - Data access object for orderProduct
 * @returns {GetFunction} - get function
 */
const get = (orderDataAccess, orderProductDataAccess) =>
	/**
	 * Returns all orders by subscriptionId
	 * @callback GetFunction
	 * @param {string} subscriptionId - subscriptionId
	 * @returns {Promise<ResponseObject>} - Contains  data object on success
	 */
	async function (subscriptionId) {
		required('subscriptionId')(subscriptionId);

		const orders = await orderDataAccess.fetch({ subscriptionId });

		const data = await Promise.all(orders.map(async order => {
			const products = await orderProductDataAccess.fetch({ orderId: order.orderId });

			order.products = products.map(item => {
				return {
					product: item.product,
					quantity: item.quantity
				};
			});
			
			return order;
		}));

		return data.length > 0 ? successResponse(data) : errorResponse(responseCodes.empty_data);
	};


module.exports = ({ orderDataAccess, orderProductDataAccess }) => ({
	get: get(orderDataAccess, orderProductDataAccess)
});