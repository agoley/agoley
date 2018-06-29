"use strict";

var _http = require("./http");

var _command = require("./command.factory");

var _directory = require("./directory");

var _appFile = require("./app-file");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function App() {
  _classCallCheck(this, App);

  this.commandFactory = new _command.CommandFactory(this);
  var rootDirectory = new _directory.Directory("", null, []);
  var homeDirectory = new _directory.Directory("home", rootDirectory, []);
  this.homeDirectory = homeDirectory;
  rootDirectory.children.push(homeDirectory);
  var gamesDirectory = new _directory.Directory("games", homeDirectory, []);
  homeDirectory.children.push(gamesDirectory);
  var snakeFile = new _appFile.AppFile(null, gamesDirectory, "snake.sh");
  gamesDirectory.children.push(snakeFile);
  var pacmanFile = new _appFile.AppFile(null, gamesDirectory, "pacman.sh");
  gamesDirectory.children.push(pacmanFile);
  var leaderboardFile = new _appFile.AppFile(null, gamesDirectory, "leaderboard.txt");
  this.workingDirectory = homeDirectory;
  var blogDirectory = new _directory.Directory("logs", homeDirectory, []);
  homeDirectory.children.push(blogDirectory);
};

var app = new App();