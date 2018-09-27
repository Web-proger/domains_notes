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

// const sequelize = new Sequelize('sqlite:./db/database.sqlite'); // Сокращенный вариант
const sequelize = new Sequelize('domains', 'null', 'null', {
    dialect: 'sqlite',
    storage: './db/database.sqlite'
});

/*model*/
const Domains = sequelize.define('domains', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    domain: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    create_date: {
        type: Sequelize.TEXT
    },
    flow: {
        type: Sequelize.TEXT
    }
});

Domains.sync().then(() => {
    console.log('db готова к работе');
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
    function query(data) {

        return
    }


    console.log(req.body);
    res.send('Даные дошли');
});

module.exports = router;
