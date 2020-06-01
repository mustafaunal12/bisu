const { sequelize, DataTypes } = require('../sequelize');

const SubscriptionSchema = require('./subscription');

const coreLayer = require('../../../Core/index');
const Order = coreLayer.domain.order;

const OrderSchema = sequelize.define('order', {
    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    subscriptionId: {
        type: DataTypes.STRING,
        references: {
            model: SubscriptionSchema,
            key: 'subscriptionId'
        }
    },
    deliveryDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    paymentMethod: {
        type: DataTypes.STRING,
        allowNull: false
    },
    totalAmount: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
});

const domainConvertor = function (model) {
    if (!model) {
        return model;
    }
    return Array.isArray(model) ?
        model.map(c => domainConvertor(c))
        : Order(
            model.orderId,
            model.subscriptionId,
            model.deliveryDate,
            model.paymentMethod,
            model.totalAmount,
            model.status
        );
};

const save = async function (domain) {
    return OrderSchema.findOne({ where: { orderId: domain.orderId } })
        .then(function (obj) {
            const order = obj ? obj.update(values) : OrderSchema.create(values);

            return domainConvertor(order);
        })
};

const fetch = async function (condition) {
    const order = await OrderSchema.findAll({ where: condition });
    return domainConvertor(order);
};

const remove = async function (id) {
    return await OrderSchema.destroy({
        where: {
            orderId: id
        }
    });
};

module.exports = {
    save,
    fetch,
    remove
};
