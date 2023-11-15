const { Model, DataTypes } = require('sequelize');

class Supplier extends Model {
  static init(sequelize) {
    super.init(
      {
        supplier_id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        cnpj: {
          type: DataTypes.BIGINT,
          allowNull: false,
          unique: true,
        },
        type: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        contact: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },
        supplier_external_id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
        }
      },
      {
        sequelize,
        modelName: 'Supplier', 
        tableName: 'suppliers', 
      }
    );
  }
}

module.exports = Supplier;


