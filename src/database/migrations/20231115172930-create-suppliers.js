'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('suppliers', {
      supplier_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'supplier_id'
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
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      supplier_external_id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
      },
    });
  },

  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('suppliers');
  }
};
