'use strict';

var config = require('./config/config');
var port   = config.PORT;

var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/public'));

app.listen(port);
console.log('Magic happens on port ' + port);

module.exports = app;
