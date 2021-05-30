'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.changeColumn('Schedules', "date", {
         type: Sequelize.STRING 
        });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Schedules', "date", {
      type: Sequelize.STRING 
     });
  }
};
