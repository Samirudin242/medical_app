'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Schedules', 'DoctorId',  Sequelize.INTEGER );
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.removeColumn("Schedules", "DoctorId")
  }
};
