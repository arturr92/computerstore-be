const Sequelize = require('sequelize');
const db = require('../config/db.js');

const Carritocliente = db.define('carritocliente', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    orden_Id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },
    componentes_ID: {
        type: Sequelize.INTEGER,
        foreignKey: true
    }
}, {tableName:'carritocliente'});

module.exports = Carritocliente;