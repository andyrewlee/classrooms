'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
  }, { tableName: 'teachers', underscored: true });
  Teacher.associate = function(models) {
    // associations can be defined here
  };
  return Teacher;
};