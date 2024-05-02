const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory' : process.env.DATABASE_URL;

const {Sequelize, DataTypes } = require('sequelize');

let sequelize = new Sequelize(DATABASE_URL, {logging:false},);

const dogModel = require('./dog.js');
const cityModel = require('./city.js')

module.exports = {
    db: sequelize,
    Dogs: dogModel(sequelize, DataTypes),
    City: cityModel(sequelize, DataTypes)
};