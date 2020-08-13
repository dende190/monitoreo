//Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const { connectionMysql } = require('./mysql');
const app = express();
const os = require('os');

//Vars
const PORT = 8083;

//Configs
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Routes
//// Get data nagios (dashboard)
app.get('/logs', (req, res) => {
	const queryGetLogs =
		`SELECT 
			id,
			dir,
			file,
			action,
			created_on
		FROM files_logs
	`;
	connectionMysql.query(queryGetLogs, (err, result, fields) => {
		if(result){
			return res.json(result);
		}
	});
});

//InitServer
app.listen(PORT, () => {
	console.log("API de nagios iniciado en puerto " + PORT);
});