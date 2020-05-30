use bisu;

DROP TABLE IF EXISTS orderProducts;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS subscriptions;
 
CREATE TABLE subscriptions (
    subscriptionId VARCHAR(255) NOT NULL,
    fullname VARCHAR(100) NOT NULL,
    address VARCHAR(255) NOT NULL,
    locationName VARCHAR(255) NOT NULL,
    subCityName VARCHAR(50) NOT NULL,
    cityName VARCHAR(50) NOT NULL,
    brand VARCHAR(50) NOT NULL,
    phoneNumber VARCHAR(20) NOT NULL,
    distributorNumber VARCHAR(50) NOT NULL,
    PRIMARY KEY (subscriptionId)
);


CREATE TABLE orders (
    orderId INT NOT NULL,
    subscriptionId VARCHAR(255) NOT NULL,
    deliveryDate DATETIME NOT NULL,
    paymentMethod VARCHAR(100) NOT NULL,
    totalAmount DECIMAL(13,2) NOT NULL,
    status VARCHAR(50) NOT NULL,
    PRIMARY KEY (orderId),
    FOREIGN KEY (subscriptionId) REFERENCES subscriptions (subscriptionId)
);


CREATE TABLE orderProducts (
    orderProductId INT NOT NULL AUTO_INCREMENT,
    orderId INT NOT NULL,
    product VARCHAR(255) NOT NULL,
    quantity INT NOT NULL,
    PRIMARY KEY (orderProductId),
    FOREIGN KEY (orderId) REFERENCES orders (orderId)
);
 
