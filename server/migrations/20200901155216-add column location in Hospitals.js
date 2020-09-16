'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.addColumn('Hospitals', 'location',  Sequelize.STRING );
  },

  down: (queryInterface, Sequelize) => {

     return queryInterface.removeColumn('Hospitals', 'location');
  }
};