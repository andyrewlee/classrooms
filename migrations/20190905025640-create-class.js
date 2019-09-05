'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('classes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      teacherId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'teachers',
          key: 'id'
        },
        allowNull: false,
        field: 'teacher_id'
      },
      classroomId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'classrooms',
          key: 'id'
        },
        allowNull: false,
        field: 'classroom_id'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at'
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('classes');
  }
};