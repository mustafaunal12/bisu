const required = require('argument-required');

const { responseCodes } = require('../resources/responseCodes');
const { successResponse, errorResponse } = require('./common');

/**
 * Returns Get function
 * @param {DataAccess} subscriptionDataAccess - Data access object for subscription
 * @returns {GetFunction} - get function
 */
const get = (subscriptionDataAccess) =>
	/**
	 * Returns all subscriptions by phone number
	 * @callback GetFunction
	 * @param {string} phoneNumber - phoneNumber
	 * @returns {Promise<ResponseObject>} - Contains  data object on success
	 */
	async function (phoneNumber) {
		required('phoneNumber')(phoneNumber);

		const data = await subscriptionDataAccess.fetch({ phoneNumber });

		return data.length > 0 ? successResponse(data) : errorResponse(responseCodes.empty_data);
	};


module.exports = ({ subscriptionDataAccess }) => ({
	get: get(subscriptionDataAccess)
});