'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('epis', {
      epi_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'epi_id'
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
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      epi_external_id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
      },
    });
  },

  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('epis');
  }
};