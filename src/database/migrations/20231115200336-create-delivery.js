'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('deliveries', {
      delivery_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'delivery_id'
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
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      delivery_external_id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
      },
    });
  },

  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('deliveries');
  }
};


