'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Blocks extends Model {

  
    
    static associate(models) {
      // define association here
    }
  }
  Blocks.init({
    titulo: DataTypes.STRING,
    contenido: DataTypes.TEXT,
    autor: DataTypes.STRING,
    fecha: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Blocks',
  });
  return Blocks;
};