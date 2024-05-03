'use strict';

const Dog = (sequelize, DataTypes) => sequelize.define('ownedDogs', {
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
  },

  ownerId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

});

module.exports = Dog;