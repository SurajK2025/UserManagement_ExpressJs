
module.exports = (mysql) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'userinfo'
    });

    connection.connect(() => {
        console.log("Connection established.");
    });

    connection.query('select * from users', (err, rows, fields) => {
        if (err) throw err;
        console.log(rows); //Returns row data in JSON format
    })
}