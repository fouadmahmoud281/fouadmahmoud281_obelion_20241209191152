const { Sequelize, Model, DataTypes } = require('sequelize');

class NCAFileTransfer extends Model {
  static init(sequelize) {
    super.init({
      fileName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      fileSize: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fileType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      filePath: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }, {
      sequelize,
      modelName: 'NCAFileTransfer',
      timestamps: false,
    });
  }
}

module.exports = NCAFileTransfer;
