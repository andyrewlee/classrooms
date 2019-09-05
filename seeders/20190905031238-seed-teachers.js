'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('teachers', [
      {
        first_name: 'John',
        last_name: 'Doe',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        first_name: 'Kobe',
        last_name: 'Bryant',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        first_name: 'Magic',
        last_name: 'Johnson',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        first_name: 'Michael',
        last_name: 'Jordan',
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('teachers', null, {});
  }
};
