/**
 * Returns new subscription object
 * @param {string} subscriptionId - subscriptionId
 * @param {string} fullname - fullname 
 * @param {string} address - address 
 * @param {string} locationName - locationName
 * @param {string} subCityName - subCityName
 * @param {string} cityName - cityName
 * @param {string} brand - brand
 * @param {string} phoneNumber - phoneNumber
 * @param {string} distributorNumber - distributorNumber
 * @returns {SubscriptionObject} - Subscriptipon object
 */
function Subscription(subscriptionId, fullname, address, locationName, subCityName, cityName, brand, phoneNumber, distributorNumber) {
	return {
		subscriptionId,
		fullname,
		address,
		locationName,
		subCityName,
		cityName,
		brand,
		phoneNumber,
		distributorNumber
	};
}

module.exports = Subscription;