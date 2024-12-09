const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('Testing_OBOOK', 'root', 'root', {
  host: 'db',
  port: 3306,
  dialect: 'mysql',
  logging: false
});

class NCAOrderBookModel extends Model {}

NCAOrderBookModel.init({
  orderId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    primaryKey: true,
    validate: {
      notEmpty: true
    }
  },
  instrument: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      isFloat: true,
      min: 0
    }
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: true,
      min: 1
    }
  }
}, {
  sequelize,
  modelName: 'NCAOrderBooks',
  timestamps: false
});

module.exports = NCAOrderBookModel;