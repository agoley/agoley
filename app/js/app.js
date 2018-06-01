'use strict';

var _http = require('./http');

var _command = require('./command.factory');

var app = {};
// @ts-ignore
app.commandFactory = new _command.CommandFactory();