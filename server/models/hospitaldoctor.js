'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model
  class HospitalDoctor extends Model {}
  HospitalDoctor.init({
    HospitalId: DataTypes.INTEGER,
    DoctorId: DataTypes.INTEGER
  }, {sequelize});
  HospitalDoctor.associate = function(models) {
    // associations can be defined here
  };
  return HospitalDoctor;
};