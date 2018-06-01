'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommandFactory = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _http = require('./http');

var _rxjs = require('rxjs');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommandFactory = exports.CommandFactory = function () {
  function CommandFactory() {
    _classCallCheck(this, CommandFactory);

    this.http = new _http.Http();
    this.initPrompt();
  }

  _createClass(CommandFactory, [{
    key: 'initPrompt',
    value: function initPrompt(command) {
      var _this = this;

      this.promptNodeTemplate = document.createElement('div');
      this.promptNodeTemplate.classList.add('prompt');

      (0, _rxjs.forkJoin)([this.http.get('https://ipinfo.io/?callback=', null, true), this.http.get('https://uzby.com/api.php?min=3&max=8', null, true)]).subscribe(function (data) {
        _this.promptNodeTemplate.textContent = _this.getUserAndHost(data) + ' ~> ';
        var promptNode = _this.promptNodeTemplate.cloneNode(true);
        _this.newPrompt(promptNode);
      });
    }
  }, {
    key: 'getUserAndHost',
    value: function getUserAndHost(data) {
      var ipinfo = JSON.parse(data[0]);
      return data[1] + '@' + ipinfo.ip;
    }
  }, {
    key: 'newPrompt',
    value: function newPrompt(promptNode) {
      document.getElementById('commandLog').appendChild(promptNode);
    }
  }]);

  return CommandFactory;
}();