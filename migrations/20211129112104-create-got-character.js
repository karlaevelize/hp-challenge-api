'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('gotCharacters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      birthPlace: {
        type: Sequelize.STRING
      },
      imageUrl: {
        type: Sequelize.STRING
      },
      headOfHouse: {
        type: Sequelize.BOOLEAN
      },
      alive: {
        type: Sequelize.BOOLEAN
      },
      spouse: {
        type: Sequelize.STRING
      },
      children: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      gotHouseId: {
        type: Sequelize.INTEGER,
        references: {
          model: "gotHouses",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
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
    await queryInterface.dropTable('gotCharacters');
  }
};