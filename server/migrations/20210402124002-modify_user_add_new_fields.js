"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("Users", "age", {
        type: Sequelize.INTEGER,
      }),
      queryInterface.addColumn("Users", "gender", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn("Users", "weight", {
        type: Sequelize.INTEGER,
      }),
      queryInterface.addColumn("Users", "height", {
        type: Sequelize.INTEGER,
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("Users", "age"),
      queryInterface.removeColumn("Users", "gender"),
      queryInterface.removeColumn("Users", "weight"),
      queryInterface.removeColumn("Users", "height"),
    ]);
  },
};
