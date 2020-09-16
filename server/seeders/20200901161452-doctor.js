'use strict';
const doctors = require("../data/doctor.json")
doctors.forEach((doctor) => {
  doctor.createdAt = new Date();
  doctor.updatedAt = new Date()
})

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Doctors', doctors, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Doctors', null, {})
  }
};
