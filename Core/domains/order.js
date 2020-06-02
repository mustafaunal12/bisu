/**
 * Returns new order object
 * @param {string} orderId - orderId 
 * @param {string} subscriptionId - subscriptionId 
 * @param {Date} deliveryDate - deliveryDate
 * @param {string} paymentMethod - paymentMethod
 * @param {number} totalAmount - totalAmount
 * @param {string} status - status
 * @param {[OrderProductObject]} products - products
 * @returns {OrderObject} - Order object
 */
function Order(orderId, subscriptionId, deliveryDate, paymentMethod, totalAmount, status, products = []) {
	return {
		orderId,
		subscriptionId,
		deliveryDate,
		paymentMethod,
		totalAmount,
		status,
		products
	};
}

module.exports = Order;