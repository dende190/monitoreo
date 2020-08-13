const mysql2 = require('mysql2');
const { mysql } = require('./config.json');

const connectionMysql = mysql2.createConnection({
  host: mysql.host,
  user: mysql.user,
  password: mysql.password,
  database: mysql.database
});

module.exports = {
	connectionMysql
};