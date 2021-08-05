import Sequelize from 'sequelize';
import db from '../config/db.js';

export const Disco_rigido = db.define('disco_rigido', {
    codigo: Sequelize.STRING,
    tipo: Sequelize.STRING,
    capacidad: Sequelize.STRING,
    velocidad: Sequelize.STRING,
    fabricante: Sequelize.STRING,
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
    }
}, {tableName: 'disco_rigido'});