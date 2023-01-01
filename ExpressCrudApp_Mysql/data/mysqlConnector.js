module.exports = (mysql) => {
  const mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "userinfo",
  });

  mysqlConnection.connect(() => {
    console.log("Connection established.");
  });

  return mysqlConnection;
};
