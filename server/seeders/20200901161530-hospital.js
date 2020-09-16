'use strict';
const hospitals = require("../data/hospital.json")
hospitals.forEach((hospital) => {
  hospital.createdAt = new Date();
  hospital.updatedAt = new Date()
})

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Hospitals', hospitals, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Hospitals', null, {})
  }
};