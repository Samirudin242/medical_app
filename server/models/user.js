"use strict";
const { encrypt } = require("../helper/bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;
  class User extends Model {}
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "name can't be empty",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "email can't be empty",
            unique: true,
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: "password can't be empty",
          },
        },
      },
      gender: { type: DataTypes.STRING },
      age: { type: DataTypes.INTEGER },
      weight: { type: DataTypes.INTEGER },
      height: { type: DataTypes.INTEGER },
    },
    {
      sequelize,
      hooks: {
        beforeCreate: function (user) {
          user.password = encrypt(user.password);
        },
      },
    }
  );
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Schedule)
  };
  return User;
};
