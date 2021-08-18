const Sequelize = require('sequelize');
const db = require('../config/db.js');

const Memoria_ram = db.define('memoria_ram', {
    codigo: Sequelize.STRING,
    tipo: Sequelize.STRING,
    capacidad: Sequelize.STRING,
    velocidad: Sequelize.STRING,
    fabricante: Sequelize.STRING,
    id: {
        type: Sequelize.INTEGER, 
        primaryKey: true
    }
}, {tableName: 'memoria_ram'});

module.exports = Memoria_ram;