'use strict';
const cities = require("../data/cities.json")
cities.forEach((city) => {
  city.createdAt = new Date();
  city.updatedAt = new Date()
})

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cities', cities, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cities', null, {})
  }
};