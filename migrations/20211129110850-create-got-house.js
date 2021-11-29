'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('gotHouses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      sigil: {
        type: Sequelize.STRING
      },
      words: {
        type: Sequelize.STRING
      },
      seat: {
        type: Sequelize.STRING
      },
      region: {
        type: Sequelize.STRING
      },
      head: {
        type: Sequelize.STRING
      },
      founder: {
        type: Sequelize.STRING
      },
      extinct: {
        type: Sequelize.BOOLEAN
      },
      imageUrl: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('gotHouses');
  }
};