'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class house extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      house.hasMany(models.character)
    }
  };
  house.init({
    name: DataTypes.STRING,
    founder: DataTypes.STRING,
    animal: DataTypes.STRING,
    colors: DataTypes.STRING,
    ghost: DataTypes.STRING,
    imgUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'house',
  });
  return house;
};