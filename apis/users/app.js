//Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const { connectionMysql } = require('./mysql');
const app = express();
const os = require('os');
const bcrypt = require('bcrypt');
const saltRounds = 10;

//Vars
const PORT = 8082;

//Configs
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use(express.json());       // to support JSON-encoded bodies

//Routes
app.post('/saveUsers', (req, res) => {
  const queryInsertNewUser = "INSERT INTO users(firstname, lastname, username, email, phone, password) VALUES(?, ?, ?, ?, ?, ?)";
  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    connectionMysql.query(queryInsertNewUser, [req.body.name, req.body.lastName, req.body.username, req.body.email, req.body.phone, req.body.password], (err, result, fields) => {
      if(err){
        return res.json(false);
      }
      return res.json(true);
    });
  });
});

app.post('/login', (req, res) => {
  const queryGetStatusServices = "SELECT id, status, email, firstname, lastname, password FROM users WHERE email = ?";
  connectionMysql.query(queryGetStatusServices, [req.body.email], (err, result, fields) => {
    if(result.length === 0){
      return res.json(false);
    }
    bcrypt.compare(req.body.password, result[0]['password'], function(err, comparacion) {
      if (comparacion) {
        const datosUsuario = {
          id: result[0]['id'],
          status: result[0]['status'],
          email: result[0]['email'],
          firstname: result[0]['firstname'],
          lastname: result[0]['lastname']
        };
        return res.json(datosUsuario);
      }
      return res.json(false); 
    });
  });
});

app.get('/getUsers', (req, res) => {
  const queryGetStatusServices = "SELECT id, status, email, firstname, lastname FROM users";
  connectionMysql.query(queryGetStatusServices, (err, result, fields) => {
    if(result.length > 0){
      return res.json(result);
    }
    
    return res.json([]);
  });
});

//InitServer
app.listen(PORT, () => {
  console.log("API de usuarios iniciado en puerto " + PORT);
});