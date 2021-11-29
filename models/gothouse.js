'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class gotHouse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      gotHouse.hasMany(models.gotCharacter)
    }
  };
  gotHouse.init({
    name: DataTypes.STRING,
    sigil: DataTypes.STRING,
    words: DataTypes.STRING,
    seat: DataTypes.STRING,
    region: DataTypes.STRING,
    head: DataTypes.STRING,
    founder: DataTypes.STRING,
    extinct: DataTypes.BOOLEAN,
    imageUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'gotHouse',
  });
  return gotHouse;
};