'use strict';
module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.createTable('files', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      crc32: Sequelize.STRING,
      fnv32: Sequelize.STRING,
      fnv64: Sequelize.STRING,
      path: Sequelize.STRING,
      project: {
        type: Sequelize.STRING,
        defaultValue: "wd1Retail"
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: async(queryInterface, Sequelize) => {
    await queryInterface.dropTable('files');
  }
};