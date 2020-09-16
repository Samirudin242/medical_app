'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model
  class City extends Model {}
  City.init({
    name: DataTypes.STRING
  }, {sequelize});
  City.associate = function(models) {
    // associations can be defined here
    City.hasMany(models.Doctor)
  };
  return City;
};