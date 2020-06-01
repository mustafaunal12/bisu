const required = require('argument-required');

const { responseCodes } = require('../resources/responseCodes');
const { successResponse, errorResponse, convertToArray } = require('./common');

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

	};


module.exports = ({ orderDataAccess, orderProductDataAccess }) => ({
	get: get(orderDataAccess, orderProductDataAccess)
});