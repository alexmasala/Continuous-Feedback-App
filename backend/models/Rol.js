import db from '../dbConfig.js';
import Sequelize from 'sequelize';

const Rol=db.define("Rol",{
    RolId:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    NumeRol:{
        type: Sequelize.STRING,
        allowNull: false
    }

})
export default Rol;