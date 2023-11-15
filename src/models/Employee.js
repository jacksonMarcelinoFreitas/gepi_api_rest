const { Model, DataTypes } = require('sequelize');

class Supplier extends Model {
  static init(sequelize) {
    super.init(
      {
        employee_id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        sector: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        registration: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        employee_external_id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
        },
      },
      {
        sequelize,
        modelName: 'Employee', 
        tableName: 'employees', 
      }
    );
  }
}

module.exports = Supplier;




