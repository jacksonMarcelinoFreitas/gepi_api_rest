const { Model, DataTypes } = require('sequelize');

class Epi extends Model {
  static init(sequelize) {
    super.init(
      {
        epi_id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        code: {
          type: DataTypes.BIGINT,
          allowNull: false,
          unique: true
        },
        amount: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        description: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        epi_external_id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
        },
      },
      {
        sequelize,
        modelName: 'Epi', 
        tableName: 'epis', 
      }
    );
  }
};

module.exports = Epi;