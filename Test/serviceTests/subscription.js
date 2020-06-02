const assert = require('assert');

const coreLayer = require('../../Core/index');
const dataLayer = require('../../Infrastructure/Data/index');

const Subscription = coreLayer.domain.subscription;
const subscriptionDataAccess = dataLayer.models.subscription;

const subscriptionService = coreLayer.service.subscription({ subscriptionDataAccess });
const { responseCodes } = coreLayer.resources.responseCodes;

describe('Subscription Tests', function () {
	before(async () => {
		const subscription1 = new Subscription('abc123', 'Utku', 'sair nefi sokak', 'caferaga', 'kadikoy', 'istanbul', 'hayat', '5332858530', '2161000000');
		await subscriptionDataAccess.save(subscription1);

		const subscription2 = new Subscription('abc126', 'Ozan', 'moda caddesi', 'goztepe', 'kadikoy', 'istanbul', 'sirma', '5331533630', '2161000001');
		await subscriptionDataAccess.save(subscription2);
	});

	describe('get function test', function () {
		it('Should return success response with data', async () => {
			const { success, data } = await subscriptionService.get('5332858530');

			assert.strictEqual(success, true);
			assert.ok(data);
			assert.ok(Array.isArray(data));
			assert.strictEqual(data.length, 1);
			assert.strictEqual(data[0].subscriptionId, 'abc123');
		});
		it('Should return 403 if data does not exist', async () => {
			const { success, data, responseCode } = await subscriptionService.get('9999999');

			assert.strictEqual(success, false);
			assert.ok(!data);
			assert.ok(responseCode);
			assert.strictEqual(responseCode, responseCodes.empty_data);
		});
	});
});