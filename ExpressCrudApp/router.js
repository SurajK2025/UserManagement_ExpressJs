const path = require('path');
module.exports = (app) => {
    app.route('/')
        .get((req, res) => res.sendFile(path.join(__dirname, 'public/views/home.html')));

    app.route('')
        .get((req, res) => { });

    app.route('/about')
        .get((req, res) => res.send('About Page'));
}