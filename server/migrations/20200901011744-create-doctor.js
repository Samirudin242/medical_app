"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Doctors", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.STRING,
      },
      ability: {
        type: Sequelize.STRING,
      },
      disease: {
        type: Sequelize.STRING,
      },
      location: {
        type: Sequelize.STRING,
      },
      schedule: {
        type: Sequelize.STRING,
      },
      online: {
        type: Sequelize.BOOLEAN,
      },
      HospitalId: {
        type: Sequelize.INTEGER,
      },
      FieldId: {
        type: Sequelize.INTEGER,
      },
      CityId: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Doctors");
  },
};
