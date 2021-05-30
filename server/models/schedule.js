'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;
  class Schedule extends Model {};

  Schedule.init({
    doctorName: DataTypes.STRING,
    time: DataTypes.STRING,
    date: DataTypes.STRING,
    hospital: DataTypes.STRING,
    location: DataTypes.STRING,
    DoctorId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
  }, {sequelize});
  Schedule.associate = function(models) {
    // associations can be defined here
    Schedule.belongsTo(models.User, {
      sourceKey: 'UserId', 
      targetKey: 'id',
    })
  };
  return Schedule;
};