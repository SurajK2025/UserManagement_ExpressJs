const mysql = require("mysql");
const mysqlConnection = require("../data/mysqlConnector");
const connection = mysqlConnection(mysql);
const path = require('path');

let userId;

exports.getAllUsers = (req, res) => {
  connection.query("select * from users", (err, rows, fields) => {
    if (err) throw err;
    res.send(rows);
  });
};

exports.deleteUser = (req, res) => {
  connection.query(`delete from users where userid = ${req.params.id}`, (err, rows, fields) => {
    res.redirect('/');
  });
};

exports.updateUserPage = (req, res) => {
  userId = req.params.id;
  res.sendFile(path.join(__dirname, "../public/views/updateUser.html"));
};

exports.updateUserFormData = (req, res) => {
  connection.query(`select username, course, purchasedate from users where userid = ${userId}`, (err, row, fields) => {
    res.send(row);
  });
}

exports.updateUserFormSubmit = (req, res) => {
  connection.query(`update users set username='${req.body.username}', course='${req.body.course}', purchasedate='${req.body.purchasedate}'  where userid=${userId}`, (err, rows, fields) => {
    if (err) console.log(err);
    userId=null;
    res.redirect('/');
  });
}

exports.createUser = (req, res) => {
  connection.query(`insert into users set username='${req.body.username}', course='${req.body.course}', purchasedate='${req.body.purchasedate}'`, (err, rows) => {
    if (err) console.log(err);
    res.redirect('/');
  });
}