/**
 * Returns new order object
 * @param {number} orderId - orderId 
 * @param {string} subscriptionId - subscriptionId 
 * @param {Date} deliveryDate - deliveryDate
 * @param {string} paymentMethod - paymentMethod
 * @param {number} totalAmount - totalAmount
 * @param {number} status - status
 * @param {SubscriptionObject} subscription - subscription
 * @param {[OrderProductObject]} products - products
 * @returns {OrderObject} - Order object
 */
function Order(orderId, subscriptionId, deliveryDate, paymentMethod, totalAmount, status, subscription, products = []) {
	return {
		orderId,
		subscriptionId,
		deliveryDate,
		paymentMethod,
		totalAmount,
		status,
		subscription,
		products
	};
}

module.exports = Order;