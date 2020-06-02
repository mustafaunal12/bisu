const { responseCodes } = require('../resources/responseCodes');

/**
 * Generates response object with success true
 * @param {*} data - Response data
 * @returns {ResponseObjectSuccess} Response object
 */
const successResponse = function (data) {
	return { success: true, data: data };
};

/**
 * Generates response object with success false
 * @param {number} responseCode - Response code
 * @param {string} [responseMessage] - Response message
 * @returns {ResponseObjectError} Response object
 */
const errorResponse = function (responseCode = responseCodes.fatal_error, responseMessage = '') {
	return { success: false, responseCode, responseMessage };
};

/**
 * Converts to array
 * @param {*} data - Data
 * @returns {*[]} - array
 */
const convertToArray = function (data) {
	return !data ? [] : (!Array.isArray(data) ? [data] : data);
};

module.exports = {
	successResponse,
	errorResponse,
	convertToArray
};