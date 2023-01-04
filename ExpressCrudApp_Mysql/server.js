const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./router');
const app = express();
const port = 8081;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use(express.json({
    type: ['application/json', 'text/plain']
}));

routes(app);

app.listen(port, () => {
    console.log(`Server listening on ${port}...`);
})
