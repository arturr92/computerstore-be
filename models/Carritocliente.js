import Sequelize from 'sequelize';
import db from '../config/db.js';

export const Carritocliente = db.define('carritocliente', {
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