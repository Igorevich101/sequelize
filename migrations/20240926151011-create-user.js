'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING(128),
        field: 'first_name',
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING(128),
        field: 'last_name',
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      isMale: {
        type: Sequelize.BOOLEAN,
        field: 'fis_male'
      },
      birthday: {
        type: Sequelize.DATEONLY
      },
      balance: {
        type: Sequelize.DECIMAL(9,2),
        allowNull: false,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};