const mysql = require("mysql");
const mysqlConnection = require("../data/mysqlConnector");
const connection = mysqlConnection(mysql);
const path = require('path');

exports.getAllUsers = (req, res) => {
  connection.query("select * from users", (err, rows, fields) => {
    if (err) throw err;
    res.send(rows);
  });
};

exports.deleteUser = (req, res) => {
  connection.query(`delete from users where userid=${req.params.id}`, (err, rows, fields) => {
    res.redirect('/');
  });
};

exports.updateUser = (req, res) => {
  res.sendFile(path.join(__dirname, "../public/views/updateUser.html"));
  connection.query(`select username, course, purchasedate from users where userid=${req.params.id}`, (err, row, fields) => {
    console.log(row);
    res.send(row);
    //res.redirect('/');
  });

  // connection.query(`update users set --- where userid=${req.params.id}`, (err, rows, fields) => {
  //   res.redirect('/');
  // });
  
};

exports.createUser = (req, res) => {
  const { username, course, purchasedate } = req.body;
  // console.log(`${username} ${course} ${purchasedate}`);

  connection.query('insert into users set username = ?, course = ?, purchasedate = ?', [username, course, purchasedate], (err, rows) => {
    if (err) console.log(err);
    res.redirect('/');
  });
}