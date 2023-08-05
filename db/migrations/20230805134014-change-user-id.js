'use strict';
const { DataTypes } = require('sequelize')
const { CUSTOMER_TABLE } = require('../models/customer.model')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn(CUSTOMER_TABLE, 'user_id', {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'user_id',
      unique: true,
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
