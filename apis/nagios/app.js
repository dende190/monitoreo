//Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const { connectionMysql } = require('./mysql');
const app = express();

//Vars
const PORT = 8080;

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
app.get('/nagiosStatusServices', (req, res) => {
	const queryGetStatusServices = "SELECT current_state FROM nagios_servicestatus";
	connectionMysql.query(queryGetStatusServices, (err, result, fields) => {
		if(result){
			return res.json(result);
		}
	});
	return null;
});
////Get data nagios (serverList)
app.get('/serverList', (req, res) => {
	const queryGetStatusServices = "SELECT nh.display_name AS name, nh.address, nhs.output, nhs.current_state, nhs.last_state_change AS modified_on FROM nagios_hosts nh JOIN nagios_hoststatus nhs ON nhs.host_object_id = nh.host_object_id";
	connectionMysql.query(queryGetStatusServices, (err, result, fields) => {
		if(result){
			return res.json(result);
		}
	});
	return null;
});


//InitServer
app.listen(PORT, () => {
	console.log("Servidor iniciado en puerto " + PORT);
});

//EXAMPLES
	// Mysql2
	// const [rows, fields] = connectionMysql.execute('SELECT * FROM `table` WHERE `name` = ? AND `age` > ?', ['Morty', 14]);