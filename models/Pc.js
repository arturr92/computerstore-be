const Sequelize = require('sequelize');
const db = require('../config/db.js');

const Pc = db.define('pc', {
    codigo: Sequelize.STRING,
    alto: Sequelize.DECIMAL,
    ancho: Sequelize.DECIMAL,
    profundidad: Sequelize.DECIMAL,
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
}, {tableName:'pc'});

module.exports = Pc;