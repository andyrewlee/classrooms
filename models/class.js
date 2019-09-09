'use strict';
module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define('Class', {
    name: DataTypes.STRING,
    teacherId: DataTypes.INTEGER,
    classroomId: DataTypes.INTEGER
  }, { tableName: 'classes', underscored: true });
  Class.associate = function(models) {
    // associations can be defined here
  };
  return Class;
};