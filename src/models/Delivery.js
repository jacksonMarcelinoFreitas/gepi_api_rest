const { Model, DataTypes } = require('sequelize');

class Delivery extends Model {
  static init(sequelize) {
    super.init(
      {
        delivery_id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        epi_code: {
          type: DataTypes.BIGINT,
          allowNull: false
        },
        employee_name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        employee_registration: {
          type: DataTypes.BIGINT,
          allowNull: false
        },
        sector: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        epi_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        amount_required:{
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        delivery_external_id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
        },
      },
      {
        sequelize,
        modelName: 'Delivery', 
        tableName: 'deliveries', 
      }
    );
  }
}

module.exports = Delivery;


