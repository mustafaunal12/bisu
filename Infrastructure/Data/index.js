module.exports = {
    sequelize: require('./sequelize'),
    models: {
        subscription: require('./models/subscription'),
        order: require('./models/order'),
        orderProduct: require('./models/orderProduct')
    }
};