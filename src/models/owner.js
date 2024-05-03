'use strict';

const Owner = (sequelize, DataTypes) => sequelize.define('Owner', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  favoriteColor: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = Owner;