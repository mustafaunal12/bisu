const assert = require('assert');

const coreLayer = require('../../Core/index');
const commonService = coreLayer.service.common;
const { responseCodes } = coreLayer.resources.responseCodes;

describe('Common Tests', function () {
	describe('successResponse test', function () {
		it('Should return success response with data', () => {
			const data = { name: 'mustafa' };
			const response = commonService.successResponse(data);

			assert.ok(response);
			assert.ok(response.success);
			assert.strictEqual(response.success, true);
			assert.ok(response.data);
			assert.strictEqual(response.data, data);
		});
		it('Should return success response with any data', () => {
			const response = commonService.successResponse();

			assert.ok(response);
			assert.ok(response.success);
			assert.strictEqual(response.success, true);
			assert.ok(!response.data);
		});
	});
	describe('errorResponse test', function () {
		it('Should return error response with 500 responsecode', () => {
			const response = commonService.errorResponse();

			assert.ok(response);
			assert.strictEqual(response.success, false);
			assert.ok(response.responseCode);
			assert.strictEqual(response.responseCode, responseCodes.fatal_error);
		});
		it('Should return error response with 403 responsecode', () => {
			const response = commonService.errorResponse(responseCodes.empty_data);

			assert.ok(response);
			assert.strictEqual(response.success, false);
			assert.ok(response.responseCode);
			assert.strictEqual(response.responseCode, responseCodes.empty_data);
		});
	});
	describe('convertToArray test', function () {
		it('Should return empty array if data is null', () => {
			const response = commonService.convertToArray();

			assert.ok(response);
			assert.ok(Array.isArray(response));
			assert.strictEqual(response.length, 0);
		});
		it('Should return array if data is an object', () => {
			const data = { name: 'Mustafa' };
			const response = commonService.convertToArray(data);

			assert.ok(response);
			assert.ok(Array.isArray(response));
			assert.strictEqual(response.length, 1);
		});
		it('Should return same array if data is an array', () => {
			const data = [{ name: 'Mustafa' }, { name: 'Ünal' }];
			const response = commonService.convertToArray(data);

			assert.ok(response);
			assert.ok(Array.isArray(response));
			assert.strictEqual(response.length, 2);
		});
	});
});