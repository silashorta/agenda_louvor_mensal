'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    // Adiciona dados na tabela 'AgendaLouvors'
    await queryInterface.bulkInsert('Agenda', [
      {
        data: new Date('2024-06-01'),
        bateria: 'João',
        baixo: 'Maria',
        guitarra: 'Carlos',
        violao: 'Ana',
        teclado: 'Lucas',
        vocal1: 'Paula',
        vocal2: 'José',
        ministro: 'Pedro',
        culto: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        data: new Date('2024-06-08'),
        bateria: 'Ricardo',
        baixo: 'Marta',
        guitarra: 'Sergio',
        violao: 'Beatriz',
        teclado: 'Leonardo',
        vocal1: 'Fernanda',
        vocal2: 'Clara',
        ministro: 'Thiago',
        culto: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Adicione mais registros conforme necessário
    ], {});
  },

  async down (queryInterface, Sequelize) {
    // Remove os dados da tabela 'AgendaLouvors'
    await queryInterface.bulkDelete('Agenda', null, {});
  }
};
