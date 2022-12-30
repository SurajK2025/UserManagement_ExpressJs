const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./router');
const app = express();
routes(app);
const port = 8081;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server listening on ${port}...`);
})
