const mysql = require('../../../db');

module.exports.User = function() {
    const find = async function(data) {
        return new Promise(function(resolve, reject) {
            mysql.query('SELECT * FROM users WHERE BINARY username=? AND BINARY password=?', [data.username, data.password], function(err, data) {
                resolve(data.length > 0 ? data[0] : undefined);
            });
        });
    }

    const save = async function(data) {
        return new Promise(function(resolve, reject) {

        });
    }

    return {find, save};
}