'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
  }, { tableName: 'teachers', underscored: true });

  return Teacher;
};
