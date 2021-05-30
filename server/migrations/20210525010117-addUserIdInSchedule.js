'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Schedules', 'UserId',  Sequelize.INTEGER );
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.removeColumn("Schedules", "UserId")
  }
};
