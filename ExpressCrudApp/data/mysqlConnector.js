
module.exports = (mysql) => {
    const mysqlConnection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'userinfo'
    });

    mysqlConnection.connect(() => {
        console.log("Connection established.");
    });

    // mysqlConnection.query('select * from users', (err, rows, fields) => {
    //     if (err) throw err;
    //     console.log(rows); //Returns row data in JSON format
    // })
}