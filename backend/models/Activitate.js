import db from '../dbConfig.js';
import Sequelize from 'sequelize';

const Activitate=db.define("Activitate",{
    ActivitateId:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    Denumire:{
        type: Sequelize.STRING,
        allowNull: false
    },
    Descriere:{
        type: Sequelize.STRING,
        allowNull: false
    },
    DataActivitate:{
        type: Sequelize.DATE, 
        allowNull: false
    },
    Durata:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Cod:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    UserId:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
    


})
export default Activitate;