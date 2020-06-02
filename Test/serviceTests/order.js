const assert = require('assert');

const coreLayer = require('../../Core/index');
const dataLayer = require('../../Infrastructure/Data/index');

const Order = coreLayer.domain.order;
const OrderProduct = coreLayer.domain.orderProduct;

const orderDataAccess = dataLayer.models.order;
const orderProductDataAccess = dataLayer.models.orderProduct;

const orderService = coreLayer.service.order({ orderDataAccess, orderProductDataAccess });
const { responseCodes } = coreLayer.resources.responseCodes;

describe('Order Tests', function () {
	before(async () => {
		const order1 = new Order('1', 'abc123', '2017-05-02 00:13', 'BKM', 10.00, 'NEW');
		await orderDataAccess.save(order1);

		const product1 = new OrderProduct(1, order1.orderId, '19 lt damanaca', 2);
		await orderProductDataAccess.save(product1);

		const order2 = new Order('2', 'abc124', '2017-04-05 12:11', 'BKM', 11.00, 'COMPLETED');
		await orderDataAccess.save(order2);

		const product2 = new OrderProduct(2, order2.orderId, '5 lt pet', 3);
		await orderProductDataAccess.save(product2);
	});

	describe('get function test', function () {
		it('Should return success response with data', async () => {
			const { success, data } = await orderService.get('abc123');

			assert.strictEqual(success, true);
			assert.ok(data);
			assert.ok(Array.isArray(data));
			assert.strictEqual(data.length, 1);
			assert.strictEqual(data[0].subscriptionId, 'abc123');
			assert.strictEqual(data[0].orderId, '1');
			assert.ok(data[0].products);
			assert.ok(Array.isArray(data[0].products));
			assert.strictEqual(data[0].products.length, 1);
			assert.strictEqual(data[0].products[0].product, '19 lt damanaca');
		});
		it('Should return 403 if data does not exist', async () => {
			const { success, data, responseCode } = await orderService.get('123');

			assert.strictEqual(success, false);
			assert.ok(!data);
			assert.ok(responseCode);
			assert.strictEqual(responseCode, responseCodes.empty_data);
		});
	});
});