const mysqlConnection = require('../data/mysqlConnector');

exports.getAllUsers = () => {
    mysqlConnection.query('select * from users', (err, rows, fields) => {
        if (err) throw err;
        console.log(rows); //Returns row data in JSON format
        return rows;
    })
}