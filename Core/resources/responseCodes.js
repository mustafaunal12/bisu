const responseCodes = {
	success: 200,
	fatal_error: 500,
	empty_data: 403
};

const responseCodeDescriptions = {
	200: 'Başarılı',
	403: 'Belirtilen telefona ait kayıt bulunamamıştır.',
	500: 'Sunucu hatası. Lütfen tekrar deneyin.'
};

module.exports = {
	responseCodes,
	responseCodeDescriptions
};