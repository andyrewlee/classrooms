const Sequelize = require('sequelize');
const config = require('./config/config');
const express = require('express')
const app = express()

const username = config.development.username;
const password = config.development.password;
const host = config.development.host;
const port = config.development.port;
const database = config.development.database;

const sequelize = new Sequelize(`
  postgres://${username}:${password}@${host}:${port}/${database}
`);

app.get('/', (req, res) => {
  res.send('Hello World')
});

app.get('/teachers', (req, res) => {
  sequelize.query('SELECT * FROM teachers', { type: sequelize.QueryTypes.SELECT})
  .then(teachers => {
    res.json(teachers);
  })
});

app.listen(3000)
