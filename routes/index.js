const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
//const sqlite3 = require('sqlite3');  // Включить на продакшене
const sqlite3 = require('sqlite3').verbose();  // Отключить на продакшене
const Sequelize = require('sequelize');

//create sqlite db file
const sequelize = new Sequelize('sqlite:./db/database.sqlite');

/*create model*/
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

// sync model with db
Domains.sync().then(() => {
    console.log('db готова к работе');
});

/*** Домашняя страница ***/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Domains Notes' });
});

/*** Добавление в базу ***/
router.post('/ajax', function(req, res, next) {
    Domains.create({
        domain: req.body.domain,
        create_date: req.body.date,
        flow: req.body.group
    });

    console.log(req.body);
    res.send(req.body.domain);
});

module.exports = router;
