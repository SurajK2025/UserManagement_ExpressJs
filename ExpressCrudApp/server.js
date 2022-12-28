const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');
const routes = require('./router');
const mysqlConnector = require('./data/mysqlConnector');
const app = express();
routes(app);
const port = 8080;
mysqlConnector(mysql);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    const path = require('path');
    res.sendFile(path.join(__dirname, 'public/views/home.html'));
});

app.listen(port, () => {
    console.log(`Server listening on ${port}...`);
})