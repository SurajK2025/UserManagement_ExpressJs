const mysql = require("mysql");
const mysqlConnection = require("../data/mysqlConnector");
const connection = mysqlConnection(mysql);

exports.getAllUsers = (req, res) => {
  connection.query("select * from users", (err, rows, fields) => {
    if (err) throw err;
    //console.log(rows); //Returns row data in JSON format
    res.send(rows);
  });
};

exports.deleteUser = (req, res) => {
  connection.query(`delete from users where userid=${req.params.id}`, (err, rows, fields) => {
    //console.log("User deleted.");
    res.redirect('/');
  });
};