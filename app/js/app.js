'use strict';

var _http = require('./http');

var _command = require('./command.factory');

var _directory = require('./directory');

var _appFile = require('./app-file');

var app = {};
// @ts-ignore
app.commandFactory = new _command.CommandFactory();
var rootDirectory = new _directory.Directory('', null, []);
var homeDirectory = new _directory.Directory('home', rootDirectory, []);
rootDirectory.children.push(rootDirectory);
var gamesDirectory = new _directory.Directory('games', homeDirectory, []);
homeDirectory.children.push(gamesDirectory);
var snakeFile = new _appFile.AppFile(null, gamesDirectory, 'snake.sh');
gamesDirectory.children.push(snakeFile);
var pacmanFile = new _appFile.AppFile(null, gamesDirectory, 'pacman.sh');
gamesDirectory.children.push(pacmanFile);
var leaderboardFile = new _appFile.AppFile(null, gamesDirectory, 'leaderboard.txt');
var algorithmsDirectory = new _directory.Directory('algorithms', homeDirectory, []);
homeDirectory.children.push(algorithmsDirectory);
app.workingDirectory = homeDirectory;

window.app = app;