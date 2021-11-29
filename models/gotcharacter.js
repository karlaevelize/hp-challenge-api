'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class gotCharacter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      gotCharacter.belongsTo(models.gotHouse)
    }
  };
  gotCharacter.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    birthPlace: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    headOfHouse: DataTypes.BOOLEAN,
    alive: DataTypes.BOOLEAN,
    spouse: DataTypes.STRING,
    children: DataTypes.ARRAY(DataTypes.STRING)
  }, {
    sequelize,
    modelName: 'gotCharacter',
  });
  return gotCharacter;
};