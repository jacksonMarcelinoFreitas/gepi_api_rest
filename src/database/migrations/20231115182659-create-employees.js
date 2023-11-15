'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('employees', {
      employee_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'employee_id'
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
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      employee_external_id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
      },
    });
  },

  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('employees');
  }
};
