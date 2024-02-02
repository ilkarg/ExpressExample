const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'express'
});

connection.connect(function(err) {
    if (err) {
        throw err;
    }
    console.log('Соединение с базой данных успешно установлено!');
});

module.exports = connection;