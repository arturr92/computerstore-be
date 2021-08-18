const Sequelize = require('sequelize');
const db = require('../config/db.js');

const Placa_video = db.define('placa_video', {
    chipset: Sequelize.STRING,
    modelo: Sequelize.STRING,
    velocidad: Sequelize.STRING,
    capacidad: Sequelize.STRING, 
    fabricante: Sequelize.STRING,
    id: {
        type: Sequelize.INTEGER, 
        primaryKey: true
    },
}, {tableName: 'placa_video'});

module.exports = Placa_video;