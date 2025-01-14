'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('agendalouvors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      data: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bateria: {
        type: Sequelize.STRING,
      },
      baixo: {
        type: Sequelize.STRING,
      },
      guitarra: {
        type: Sequelize.STRING,
      },
      violao: {
        type: Sequelize.STRING,
      },
      teclado: {
        type: Sequelize.STRING,
      },
      vocal1: {
        type: Sequelize.STRING,
      },
      vocal2: {
        type: Sequelize.STRING,
      },
      ministro: {
        type: Sequelize.STRING,
      },
      culto: {
        type: Sequelize.STRING,
      },
      kids1: {
        type: Sequelize.STRING,
      },
      kids2: {
        type: Sequelize.STRING,
      },
      kids3: {
        type: Sequelize.STRING,
      },
      kids4: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('agendalouvors');
  },
};
