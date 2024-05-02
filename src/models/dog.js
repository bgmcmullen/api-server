'use strict';

const Dog = (sequelize, DataTypes) => sequelize.define('Dog', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  breed: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = Dog;