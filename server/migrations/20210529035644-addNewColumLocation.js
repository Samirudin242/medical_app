'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.addColumn('Schedules', "hospital",  Sequelize.STRING );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Schedules', "hospital", Sequelize.STRING);

  }
};
