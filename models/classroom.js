'use strict';
module.exports = (sequelize, DataTypes) => {
  const Classroom = sequelize.define('Classroom', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
  }, { tableName: 'classrooms', underscored: true });

  return Classroom;
};
