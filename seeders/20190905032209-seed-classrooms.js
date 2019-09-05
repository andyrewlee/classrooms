'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('classrooms', [
      {
        name: 'Product School',
        address: 'Seattle, WA',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Design School',
        address: 'Los Angeles, CA',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Coding School',
        address: 'San Francisco, CA',
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('classrooms', null, {});
  }
};
