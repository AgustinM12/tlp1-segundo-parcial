const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    DB_NAME="reservadb",
    DB_USER="root",
    DB_PASSWORD="24879156",

{
    host: "localhost",
    dialect: "mysql" 
});

module.exports = {
    sequelize,
    DataTypes,
    Model
}