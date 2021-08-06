import Sequelize from 'sequelize';
import db from '../config/db.js';

export const Pc = db.define('pc', {
    codigo: Sequelize.STRING,
    alto: Sequelize.DECIMAL,
    ancho: Sequelize.DECIMAL,
    profundidad: Sequelize.DECIMAL,
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
}, {tableName:'pc'});