import db from '../dbConfig.js';
import Sequelize from 'sequelize';

const Utilizator=db.define("Utilizator",{
    UserId:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    Email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    Password:{
        type: Sequelize.STRING,
        allowNull: false
    }

})
export default Utilizator;