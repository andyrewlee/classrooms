const Sequelize = require('sequelize');
const config = require('./config/config');

const username = config.development.username;
const password = config.development.password;
const host = config.development.host;
const port = config.development.port;
const database = config.development.database;

const sequelize = new Sequelize(`
  postgres://${username}:${password}@${host}:${port}/${database}
`);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });