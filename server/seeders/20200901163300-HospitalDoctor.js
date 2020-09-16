'use strict';
const HospitalDoctors = require("../data/HospitalDoctor.json")
HospitalDoctors.forEach((HospitalDoctor) => {
  HospitalDoctor.createdAt = new Date();
  HospitalDoctor.updatedAt = new Date()
})

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('HospitalDoctors', HospitalDoctors, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('HospitalDoctors', null, {})
  }
};
