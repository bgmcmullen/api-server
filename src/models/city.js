'use strict';

const City = (sequelize, DataTypes) => sequelize.define('City', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  population: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

module.exports = City;