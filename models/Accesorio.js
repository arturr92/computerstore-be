import Sequelize from 'sequelize';
import db from '../config/db.js';

export const Accesorio = db.define('accesorio', {
    codigo: Sequelize.DECIMAL,
    descripcion: Sequelize.STRING,
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    }
}, {tableName:'accesorio'});