/**
 * @typedef ResponseObject Response type. Depending on the response contains custom field(s)
 * @type {ResponseObjectSuccess | ResponseObjectError}
 */

/**
 * @typedef ResponseObjectSuccess Response type. Depending on the response contains custom field(s)
 * @type {object}
 * @property {boolean} success True
 * @property {*}
 */

/**
 * @typedef ResponseObjectError Response type. Depending on the response contains custom field(s)
 * @type {object}
 * @property {boolean} success False
 * @property {number} responseCode Code for the error
 * @property {string} responseMessage Error message
 */

/**
 * @typedef DataAccess
 * @type {object}
 * @property {(entities: any) => Promise<any>} save
 * @property {(condition: any) => Promise<boolean>} remove
 * @property {(query: any) => Promise<any>} fetch
 * @property {(model: any) => any} domainConvertor
 */

/**
 * @typedef SubscriptionObject
 * @type {object}
 * @property {string} subscriptionId
 * @property {string} fullname
 * @property {string} address
 * @property {string} locationName
 * @property {string} subCityName
 * @property {string} cityName
 * @property {string} brand
 * @property {string} phoneNumber
 * @property {string} distributorNumber
 */

/**
* @typedef OrderObject
* @type {object}
* @property {number} orderId
* @property {string} subscriptionId
* @property {Date} deliveryDate
* @property {string} paymentMethod
* @property {number} totalAmount
* @property {number} status
* @property {SubscriptionObject} subscription
* @property {OrderProductObject[]} products
*/

/**
 * @typedef OrderProductObject
 * @type {object}
 * @property {number} orderProductId
 * @property {number} orderId
 * @property {string} product
 * @property {number} quantity
 * @property {OrderObject} order
 */

 /**
 * @typedef DataAccess
 * @type {object}
 * @property {(domain: any) => Promise<any>} save
 * @property {(id: any) => Promise<boolean>} remove
 * @property {(condition: any) => Promise<any>} fetch
 */