'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('classes', [
      {
        name: 'Intro to Coding',
        teacher_id: 1,
        classroom_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Intro to HTML',
        teacher_id: 2,
        classroom_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Intro to Design',
        teacher_id: 3,
        classroom_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('classes', null, {});
  }
};
