"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _command = require("./command.factory");

var _directory = require("./directory");

var _appFile = require("./app-file");

var _router = require("./router.class");

var _logs = require("./logs");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App() {
    _classCallCheck(this, App);

    this.router = new _router.MinimalRouter();
    this.router.addRoute({ path: '/back-pain-log', cb: onBackPainRoute });
    this.logs = new _logs.Logs();

    this.initRoutes();

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
  }

  _createClass(App, [{
    key: "initRoutes",
    value: function initRoutes() {
      var _this = this;

      setTimeout(function () {
        _this.router.sync();
      }, 500);
    }
  }]);

  return App;
}();

var hideCommandLog = function hideCommandLog() {
  document.getElementById('commandLog').style.display = 'none';
  document.getElementById('welcomeParagraph').style.display = 'none';
};

var hideAsciiMe = function hideAsciiMe() {
  document.getElementById('asciiMe').style.display = 'none';
};

var onBackPainRoute = function onBackPainRoute(path) {
  hideAsciiMe();
  hideCommandLog();
  app.logs.displayBackPainLog();
};

var app = new App();