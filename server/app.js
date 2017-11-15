var port = process.env.PORT || 3000;

var express = require('express');
var app = express();
var bodyParser = require("body-parser");

var log = require('./helpers/log');

//var db = require('./db');
global.__root = __dirname + '/';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Add headers

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/api', function (req, res) {
	log.info('rest : /api');
  res.status(200).send('API works.');
});

var AuthController = require(__root + 'auth/Auth.controller');
app.use('/api/auth', AuthController);

var server = app.listen(port, function () {
  console.log('Express server listening on port ' + port);
});

/*
TEST socket io
var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
  console.log('connection')
});*/