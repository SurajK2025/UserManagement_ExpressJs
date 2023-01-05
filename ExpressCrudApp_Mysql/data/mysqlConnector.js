module.exports = (mysql) => {
  const mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "userinfo",
  });

  mysqlConnection.connect(() => {
    console.log("Connection established.");
  });

  return mysqlConnection;
};
//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root'