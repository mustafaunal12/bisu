/* subscriptions */
INSERT INTO subscriptions (subscriptionId, fullname, address, locationName, subCityName, cityName, brand, phoneNumber, distributorNumber) VALUES
    ('abc123', 'Utku', 'sair nefi sokak', 'caferaga', 'kadikoy', 'istanbul', 'hayat', '5332858530', '2161000000'),
    ('abc124', 'Utku', 'sair nefi sokak', 'caferaga', 'kadikoy', 'istanbul', 'sirma', '5332858530', '2161000004'),
    ('abc125', 'Ozan', 'bahariye sokak', 'caddebostan', 'kadikoy', 'istanbul', 'erikli', '5331533630', '2161000001'),
    ('abc126', 'Ergin', 'moda caddesi', 'goztepe', 'kadikoy', 'istanbul', 'sirma', '5332858530', '2161000002');

/* orders */
INSERT INTO orders (orderId, subscriptionId, deliveryDate, paymentMethod, totalAmount, status) VALUES 
    (1, 'abc123', '2017-05-02 00:13', 'BKM', 10.00, 'NEW'),
    (2, 'abc123', '2017-04-23 20:05', 'MASTERPASS', 24.00, 'CONFIRMED'),
    (3, 'abc123', '2017-03-31 16:35', 'PAYATDOOR', 12.00, 'CANCELED'),
    (4, 'abc125', '2017-03-29 11:19', 'PAYATDOOR', 36.00, 'COMPLETED'),
    (5, 'abc125', '2017-03-23 17:59', 'BKM', 15.00, 'CONFIRMED'),
    (6, 'abc126', '2017-03-09 19:02', 'MASTERPASS', 32.50, 'CANCELED');

/* orderProduct */
INSERT INTO orderProducts (orderId, product, quantity) VALUES
    (1, '19 lt damanaca', 1),
    (2, '19 lt damanaca', 1),
    (2, '10 lt pet', 2),
    (3, '19 lt damanaca', 2),
    (4, '19 lt damanaca',3),
    (5, '5 lt pet',2),
    (6, '19 lt damanaca', 1),
    (6, '5 lt pet',3);