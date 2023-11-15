const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        user_external_id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
        },
      },
      {
        sequelize,
        modelName: 'User', 
        tableName: 'users', 
      }
    );
  }
}

module.exports = User;
