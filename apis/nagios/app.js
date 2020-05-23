//Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const { connectionMysql } = require('./mysql');
const app = express();
const os = require('os');

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
	const queryGetStatusServices = "SELECT current_state, output FROM nagios_servicestatus";
	connectionMysql.query(queryGetStatusServices, (err, result, fields) => {
		if(result){
			return res.json(result);
		}
	});
	return null;
});

app.get('/test', (req, res) => {
	console.log(os.homedir());
	console.log(os.platform());
	console.log(os.cpus());
	console.log(os.hostname());
	console.log(os.userInfo());
	console.log(os.uptime());
});
////Get data nagios (serverList)
app.get('/serverList', (req, res) => {
	const queryGetStatusServices =
		`SELECT
			nh.host_id AS id,
			nh.display_name AS name,
			nh.address,
			nhs.output,
			nhs.current_state,
			nhs.last_state_change AS modified_on
		FROM nagios_hosts nh
		JOIN nagios_hoststatus nhs
			ON nhs.host_object_id = nh.host_object_id
	`;
	connectionMysql.query(queryGetStatusServices, (err, result, fields) => {
		if(result){
			for (host of result) {
				host['services'] = [
					{
						id: 1,
						name: 'SSH',
						status: 0,
					},
					{
						id: 2,
						name: 'PING',
						status: 0,
					},
					{
						id: 3,
						name: 'USERS',
						status: 0,
					},
					{
						id: 4,
						name: 'HTTP',
						status: 0,
					},
					{
						id: 5,
						name: 'DISNK',
						status: 1,
					}
				];
			}
			return res.json(result);
		}
	});
	return null;
});


//InitServer
app.listen(PORT, () => {
	console.log("API de nagios iniciado en puerto " + PORT);
});