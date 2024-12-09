const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = new Sequelize('Testing_OBOOK', 'root', 'root', {
  host: 'db',
  port: 3306,
  dialect: 'mysql'
});

class ESMAFileValidation extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      senderCode: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true }
      },
      fileName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true }
      },
      fileSize: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          max: 1048576,
          min: 1
        }
      }
    }, {
      sequelize,
      modelName: 'ESMAFileValidation',
      tableName: 'ESMAFileValidations',
      timestamps: false
    });
  }
}

ESMAFileValidation.init(sequelize);

module.exports = ESMAFileValidation;