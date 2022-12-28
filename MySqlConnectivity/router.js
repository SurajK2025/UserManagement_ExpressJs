
module.exports = (app) => {
    app.route('/about')
        .get((req, res) => res.send("About Page"));
}