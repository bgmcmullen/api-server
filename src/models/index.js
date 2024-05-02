const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory' : process.env.DATABASE_URL;

const {Sequelize, DataTypes } = require('sequelize');

let sequelize = new Sequelize(DATABASE_URL, {logging:false},);

const Collection = require('./collection.js')

const dogSchema = require('./dog.js');
const citySchema = require('./city.js');

const dogModel = dogSchema(sequelize, DataTypes);
const cityModel = citySchema(sequelize, DataTypes);

const dogCollection = new Collection(dogModel);
const cityCollection = new Collection(cityModel);

module.exports = {
    db: sequelize,
    Dogs: dogCollection,
    City: cityCollection
};