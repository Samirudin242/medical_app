'use strict';
const Fields = require("../data/fields.json")
Fields.forEach((city) => {
  city.createdAt = new Date();
  city.updatedAt = new Date()
})

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Fields', Fields, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Fields', null, {})
  }
};
