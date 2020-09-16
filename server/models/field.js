'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model
  class Field extends Model {}
  Field.init({
    name: DataTypes.STRING
  }, {sequelize});
  Field.associate = function(models) {
    // associations can be defined here
    Field.hasMany(models.Doctor)
  };
  return Field;
};