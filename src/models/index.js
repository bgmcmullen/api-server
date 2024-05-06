const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory' : process.env.DATABASE_URL;

const {Sequelize, DataTypes } = require('sequelize');

let sequelize = new Sequelize(DATABASE_URL, {logging:false},);

const Collection = require('./collection.js')

const dogSchema = require('./dog.js');
const ownerSchema = require('./owner.js');

const dogModel = dogSchema(sequelize, DataTypes);
const ownerModel = ownerSchema(sequelize, DataTypes);

const dogCollection = new Collection(dogModel);
const ownerCollection = new Collection(ownerModel);

ownerModel.hasMany(dogModel, {foreignKey: 'ownerId', sourceKey: 'id'} )
dogModel.belongsTo(ownerModel, {foreignKey: 'ownerId', targetKey: 'id'});

module.exports = {
    db: sequelize,
    Dogs: dogCollection,
    Owners: ownerCollection
};