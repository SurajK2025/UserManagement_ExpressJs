const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const routes = require('./router');
const mysql = require('mysql');

const app = express();
const port = 3001;
routes(app);

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'empschema'
});

connection.connect(() => {
    console.log("2.Connection established.");
});

//Error:
//ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client at Sequence._packetToError
//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root123';
//flush privileges; 
connection.query('select * from emp', (err, rows, fields) => {
    if (err) throw err;
    console.log(rows); //Returns row data in JSON format
})

app.get('/', (req, res) => {
    res.send("Home Page");
})

app.listen(port, () => {
    console.log(`1.Server listening on port ${port}`);
});