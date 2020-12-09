import express from 'express';
import bodyParser from 'body-parser';
import db from './dbConfig.js';
import Rol from './models/Rol.js';
import Utilizator from './models/User.js';

let app = express();
let router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', router);

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  Rol.hasMany(Utilizator, {as: "Users", foreignKey: "RolId"});
  Utilizator.belongsTo(Rol, {foreignKey: "RolId"});

  async function createRol(rol){
    return await Rol.create(rol, {
        include: [
            {model: Utilizator, as: "Users"}
        ]});
       
}
async function getRoles(){
  return await Rol.findAll(
      {              
          include: [
        {
            model: Utilizator,
            as: "Users"
        }
      ]
    })   
}
router.route('/rol').post( async (req, res) => {
  return res.json(await createRol(req.body));

})
router.route('/rol').get( async (req, res) => {
  return res.json(await getRoles());
})

  let port = process.env.PORT || 8000;
  app.listen(port);
  console.log('API is runnning at ' + port);
