const { sequelize, DataTypes } = require('../sequelize');

const coreLayer = require('../../../Core/index');
const Subscription = coreLayer.domain.subscription;

const SubscriptionSchema = sequelize.define('subscription', {
    subscriptionId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    fullname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    locationName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    subCityName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cityName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    distributorNumber: {
        type: DataTypes.STRING,
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
        : Subscription(
            model.subscriptionId,
            model.fullname,
            model.address,
            model.locationName,
            model.subCityName,
            model.cityName,
            model.brand,
            model.phoneNumber,
            model.distributorNumber
        );
};

const save = async function (domain) {
    return SubscriptionSchema.findOne({ where: { subscriptionId: domain.subscriptionId } })
        .then(function (obj) {
            const subscription = obj ? obj.update(values) : SubscriptionSchema.create(values);

            return domainConvertor(subscription);
        })
};

const fetch = async function (condition) {
    const subscription = await SubscriptionSchema.findAll({ where: condition });
    return domainConvertor(subscription);
};

const remove = async function (id) {
    return await SubscriptionSchema.destroy({
        where: {
            subscriptionId: id
        }
    });
};

module.exports = {
    save,
    fetch,
    remove
};