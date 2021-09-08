'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      character.belongsTo(models.house)
    }
  };
  character.init({
    name: DataTypes.STRING,
    blood: DataTypes.STRING,
    species: DataTypes.STRING,
    patronus: DataTypes.STRING,
    born: DataTypes.STRING,
    quote: DataTypes.TEXT,
    imgUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'character',
  });
  return character;
};