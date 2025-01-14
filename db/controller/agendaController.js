const { Op } = require('sequelize');
const database = require('../models');

class IntegrantesController {
  static async importaIntegrantes(req, res) {
    const jsonData = req.body;

    try {
      console.log('Dados recebidos:', jsonData); // Log para verificar os dados recebidos

      // Verificar a estrutura dos dados
      if (!Array.isArray(jsonData)) {
        return res.status(400).json({ erro: 'Dados no formato incorreto' });
      }

      // Remover o campo `id` dos dados se existir
      const sanitizedData = jsonData.map(data => {
        const { id, ...rest } = data;
        return rest;
      });

      // Inserir os dados no banco de dados
      const integrantesCriados = await database.AgendaLouvor.bulkCreate(sanitizedData);
      console.log('Dados inseridos com sucesso:', integrantesCriados);

      // Retornar os dados inseridos
      return res.status(200).json(integrantesCriados);
    } catch (error) {
      console.error('Erro ao inserir dados no banco:', error); // Log para capturar o erro
      // Retornar uma resposta de erro
      return res.status(500).json({ erro: error.message });
    }
  }

  static async getTodosIntegrantes(req, res) {
    try {
      // Buscar todos os registros no banco de dados
      const todosIntegrantes = await database.AgendaLouvor.findAll();

      // Retornar os registros encontrados
      return res.status(200).json(todosIntegrantes);
    } catch (error) {
      console.error('Erro ao buscar dados no banco:', error); // Log para capturar o erro
      // Retornar uma resposta de erro
      return res.status(500).json({ erro: error.message });
    }
  }

  static async contaFrequencia(req, res) {
    try {
      const registros = await database.AgendaLouvor.findAll();

      return res.status(200).json(registros);
    } catch (error) {
      console.error('Erro ao buscar registros:', error);
      return res.status(500).json({ erro: error.message });
    }
  }
}

module.exports = IntegrantesController;
