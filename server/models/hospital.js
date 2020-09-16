'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model
  class Hospital extends Model {}
  Hospital.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING
  }, {sequelize});
  Hospital.associate = function(models) {
    // associations can be defined here
    Hospital.belongsToMany(models.Doctor, {
      through: models.HospitalDoctor
    })
  };
  return Hospital;
};