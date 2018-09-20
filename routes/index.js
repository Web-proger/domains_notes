const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
//const sqlite3 = require('sqlite3');  // Включить на продакшене
const sqlite3 = require('sqlite3').verbose();  // Отключить на продакшене
const Sequelize = require('sequelize');

/*** Создаем db ***/
let db = new sqlite3.Database('./db/database.sqlite', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
});

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

    storage: './db/database.sqlite',

    // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
    operatorsAliases: false
});

/*** Домашняя страница ***/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Domains Notes' });
});

/*** Добавление в базу ***/
router.post('/ajax', function(req, res, next) {
    var line =  'Домен: ' + req.body.domain
                + ', Дата регистрации: ' + req.body.date
                + ', Поток: ' + req.body.group
                + '\n';
//  var file = fs.readFileSync('public/db.txt');
//  fs.writeFileSync('public/db.txt', file + line);
//  res.send({'ip': req.ip, host: req.hostname});
    console.log(req.body.domain);
    res.send('Даные дошли');
});

module.exports = router;
