const Sequelize = require('sequelize');
const db = require('../config/db.js');

const Disco_rigido = db.define('disco_rigido', {
    codigo: Sequelize.STRING,
    tipo: Sequelize.STRING,
    capacidad: Sequelize.STRING,
    velocidad: Sequelize.STRING,
    fabricante: Sequelize.STRING,
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    }
}, {tableName: 'disco_rigido'});

module.exports = Disco_rigido;