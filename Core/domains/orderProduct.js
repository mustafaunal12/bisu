/**
 * Returns new OrderProductObject
 * @param {number} orderProductId - orderProductId 
 * @param {number} orderId - orderId
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