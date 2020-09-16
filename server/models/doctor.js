'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model
  class Doctor extends Model {}
  Doctor.init({
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    ability: DataTypes.STRING,
    disease: DataTypes.STRING,
    location: DataTypes.STRING,
    schedule: DataTypes.STRING,
    online: DataTypes.BOOLEAN,
    HospitalId: DataTypes.INTEGER,
    FieldId: DataTypes.INTEGER,
    CityId: DataTypes.INTEGER
  }, {sequelize});
  Doctor.associate = function(models) {
    // associations can be defined here
    Doctor.belongsTo(models.City, {
      sourceKey: 'CityId',
      targetKey: 'id'
    }),
    Doctor.belongsToMany(models.Hospital, {
      through: models.HospitalDoctor
    }),
    Doctor.belongsTo(models.Field, {
      sourceKey: 'FieldId',
      targetKey: 'id'
    })
  };
  return Doctor;
};