const Sequelize = require('sequelize');
const db = require('../config/db.js');

const Microprocesador = db.define('microprocesador', {
    cache:   Sequelize.STRING,
    cantidad_hilos: Sequelize.DECIMAL,
    codigo: Sequelize.STRING,
    velocidad: Sequelize.STRING,
    fabricante: Sequelize.STRING,
    id: {
        type: Sequelize.INTEGER, 
        primaryKey: true
    },
}, { tableName: 'microprocesador'});

module.exports = Microprocesador;