'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.addColumn(
      'teachers',
      'last_name',
      Sequelize.STRING
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'teachers',
      'last_name',
      Sequelize.STRING
    );
  }
};
