const { Model, DataTypes, Sequelize } = require('sequelize');

class ESMAFileValidation extends Model {
  static init(sequelize) {
    super.init({
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
      timestamps: false
    });
  }
}

module.exports = ESMAFileValidation;
