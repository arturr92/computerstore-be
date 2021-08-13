const Sequelize = require('sequelize');
const db = require('../config/db.js');

const Accesorio = db.define('accesorio', {
    codigo: Sequelize.DECIMAL,
    descripcion: Sequelize.STRING,
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    }
}, { tableName:'accesorio' });

module.exports = Accesorio;
