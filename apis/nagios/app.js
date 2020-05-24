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
	let demoServer = [{
		id: 1,
		name: 'LocalHost',
		address: '127.0.0.1',
		output: 'PING OK - Packet loss = 0%, RTA = 0.04 ms',
		current_state: 0,
		modified_on: '2020-03-09 09:10:12',
		services: [
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
				name: 'HTTP',
				status: 0,
			},
			{
				id: 4,
				name: 'DISK',
				status: 0,
			}
		]
	}, {
		id: 2,
		name: 'SRVWeb01',
		address: '31.220.61.185',
		output: 'PING OK - Packet loss = 0%, RTA = 104.62 ms',
		current_state: 0,
		modified_on: '2020-05-22 19:01:32',
		services: [
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
				name: 'HTTP',
				status: 1,
			},
		]
	}, {
		id: 3,
		name: 'SRVWeb02',
		address: '31.220.61.186',
		output: 'PING OK - Packet loss = 0%, RTA = 100.23 ms',
		current_state: 0,
		modified_on: '2020-05-21 05:15:22',
		services: [
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
				name: 'FTP',
				status: 2,
			},
			{
				id: 4,
				name: 'HTTP',
				status: 2,
			},
			{
				id: 5,
				name: 'DISK',
				status: 2,
			}
		]
	}, {
		id: 4,
		name: 'SRVWeb03',
		address: '31.220.61.187',
		output: 'PING OK - Packet loss = 0%, RTA = 92.12 ms',
		current_state: 0,
		modified_on: '2020-05-20 24:31:43',
		services: [
			{
				id: 1,
				name: 'SSH',
				status: 0,
			},
			{
				id: 4,
				name: 'HTTP',
				status: 2,
			},
			{
				id: 5,
				name: 'DISK',
				status: 2,
			}
		]
	}];

	res.json(demoServer);
	return;
	// const queryGetStatusServices =
	// 	`SELECT
	// 		nh.host_id AS id,
	// 		nh.display_name AS name,
	// 		nh.address,
	// 		nhs.output,
	// 		nhs.current_state,
	// 		nhs.last_state_change AS modified_on
	// 	FROM nagios_hosts nh
	// 	JOIN nagios_hoststatus nhs
	// 		ON nhs.host_object_id = nh.host_object_id
	// `;
	// connectionMysql.query(queryGetStatusServices, (err, result, fields) => {
	// 	if(result){
	// 		for (host of result) {
	// 			host['services'] = [
	// 				{
	// 					id: 1,
	// 					name: 'SSH',
	// 					status: Math.random() * (3 - 0) + 0,
	// 				},
	// 				{
	// 					id: 2,
	// 					name: 'PING',
	// 					status: Math.random() * (3 - 0) + 0,
	// 				},
	// 				{
	// 					id: 3,
	// 					name: 'USERS',
	// 					status: Math.random() * (3 - 0) + 0,
	// 				},
	// 				{
	// 					id: 4,
	// 					name: 'HTTP',
	// 					status: Math.random() * (3 - 0) + 0,
	// 				},
	// 				{
	// 					id: 5,
	// 					name: 'DISNK',
	// 					status: Math.random() * (3 - 0) + 0,
	// 				}
	// 			];
	// 		}
	// 		return res.json(result);
	// 	}
	// });
	return null;
});


//InitServer
app.listen(PORT, () => {
	console.log("API de nagios iniciado en puerto " + PORT);
});