/**
 * Returns new OrderProductObject
 * @param {number} orderProductId - orderProductId 
 * @param {string} orderId - orderId
 * @param {string} product - product
 * @param {number} quantity - quantity
 * @param {OrderObject} order - order
 * @returns {OrderProductObject} - OrderProduct object
 */
function OrderProduct(orderProductId, orderId, product, quantity, order) {
	return {
		orderProductId,
		orderId,
		product,
		quantity,
		order
	};
}

module.exports = OrderProduct;