'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class AgendaLouvor extends Model {
    static associate(models) {
      // Defina associações aqui, se houver
    }
  }

  AgendaLouvor.init({
    data: DataTypes.STRING,
    bateria: DataTypes.STRING,
    baixo: DataTypes.STRING,
    guitarra: DataTypes.STRING,
    violao: DataTypes.STRING,
    teclado: DataTypes.STRING,
    vocal1: DataTypes.STRING,
    vocal2: DataTypes.STRING,
    ministro: DataTypes.STRING,
    culto: DataTypes.STRING,
    kids1: DataTypes.STRING, // Nova coluna kids1
    kids2: DataTypes.STRING, // Nova coluna kids2
    kids3: DataTypes.STRING, // Nova coluna kids3
    kids4: DataTypes.STRING  // Nova coluna kids4
  }, {
    sequelize,
    modelName: 'AgendaLouvor',
  });
  
  return AgendaLouvor;
};
