const express = require('express');
const models = require('./models');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (_, res) => {
  res.send('Hello World')
});

app.get('/teachers', (_, res) => {
  models.Teacher.findAll().then((teachers) => {
    res.json(teachers);
  })
});

app.post('/teachers', (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  models.Teacher.create({ firstName, lastName }).then((result) => {
    res.json(result.dataValues);
  });
});

app.get('/classes', (_, res) => {
  models.Class.findAll().then((classes) => {
    res.json(classes);
  })
});

app.get('/classrooms', (_, res) => {
  models.Classroom.findAll().then((classrooms) => {
    res.json(classrooms);
  })
});


app.listen(3000)
