'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    firstName: DataTypes.STRING
  }, { tableName: 'teachers' });
  Teacher.associate = function(models) {
    // associations can be defined here
  };
  return Teacher;
};