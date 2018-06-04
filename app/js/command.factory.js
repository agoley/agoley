'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommandFactory = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _http = require('./http');

var _rxjs = require('rxjs');

var _command = require('./command');

var _bin = require('./bin');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommandFactory = exports.CommandFactory = function () {
  function CommandFactory() {
    _classCallCheck(this, CommandFactory);

    this.http = new _http.Http();
    this.bin = new _bin.Bin();

    this.initPrompt();

    document.onkeyup = this.onInput.bind(this);
  }

  _createClass(CommandFactory, [{
    key: 'initPrompt',
    value: function initPrompt(command) {
      var _this = this;

      (0, _rxjs.forkJoin)([this.http.get('https://ipinfo.io/?callback=', null, true), this.http.get('https://cors.io/?https://uzby.com/api.php?min=3&max=8', null, true)]).subscribe(function (data) {
        _this.constructPromptNodeTemplate(data);
        _this.newPrompt();
      });
    }
  }, {
    key: 'constructPromptNodeTemplate',
    value: function constructPromptNodeTemplate(data) {
      this.promptNodeTemplate = document.createElement('div');
      this.promptNodeTemplate.classList.add('prompt');

      this.promptNodeTemplate.textContent = this.getUserAndHost(data) + ' ~> ';
    }
  }, {
    key: 'getUserAndHost',
    value: function getUserAndHost(data) {
      var ipinfo = JSON.parse(data[0]);
      return data[1] + '@' + ipinfo.ip;
    }
  }, {
    key: 'onInput',
    value: function onInput(event) {
      if (event.code === 'ArrowUp') {
        if (!this.commandHistory || this.commandHistory.length === 0) {
          return;
        }

        if (typeof this.commandHistoryIndex !== 'number') {
          this.commandHistoryIndex = this.commandHistory.length - 1;
        } else if (this.commandHistoryIndex > 0) {
          this.commandHistoryIndex--;
        }

        if (this.commandHistoryIndex >= 0 && this.commandHistory[this.commandHistoryIndex]) {
          var cmd = this.commandHistory[this.commandHistoryIndex].textNode.innerHTML;
          this.commandCurrent.textNode.innerHTML = cmd;
        }
      }

      if (event.code === 'ArrowDown') {
        if (!this.commandHistory || this.commandHistory.length === 0) {
          return;
        }

        if (typeof this.commandHistoryIndex !== 'number') {
          this.commandHistoryIndex = 0;
        } else if (this.commandHistoryIndex < this.commandHistory.length) {
          this.commandHistoryIndex++;
        }

        if (this.commandHistoryIndex >= 0 && this.commandHistory[this.commandHistoryIndex]) {
          var _cmd = this.commandHistory[this.commandHistoryIndex].textNode.innerHTML;
          this.commandCurrent.textNode.innerHTML = _cmd;
        }
      }

      if (event.code === 'Backspace') {
        this.onBackspace();
      }
      if (event.code === 'Enter') {
        this.proccessCommand();
      } else if (this.isValidCommandInput(event)) {
        this.commandCurrent.textNode.innerHTML = this.commandCurrent.textNode.innerHTML + event.key;
      }
    }
  }, {
    key: 'isValidCommandInput',
    value: function isValidCommandInput(event) {
      return event.key.length === 1;
    }
  }, {
    key: 'onBackspace',
    value: function onBackspace() {
      if (this.commandCurrent.textNode.innerHTML.length > 0) {
        this.commandCurrent.textNode.innerHTML = this.commandCurrent.textNode.innerHTML.substring(0, this.commandCurrent.textNode.innerHTML.length - 1);
      }
    }
  }, {
    key: 'newPrompt',
    value: function newPrompt() {
      this.commandHistoryIndex = null;
      this.logCommand(this.commandCurrent);
      this.removeCursor(this.commandCurrent);
      this.createNewCommand();
      this.addCursor(this.commandCurrent);
    }
  }, {
    key: 'createNewCommand',
    value: function createNewCommand() {
      var promptNode = this.promptNodeTemplate.cloneNode(true);

      var commandTextNode = document.createElement('span');
      commandTextNode.classList.add('command-text');
      promptNode.appendChild(commandTextNode);
      this.commandCurrent = new _command.Command(promptNode, commandTextNode);

      document.getElementById('commandLog').appendChild(promptNode);
    }
  }, {
    key: 'proccessCommand',
    value: function proccessCommand() {
      this.bin.invoke(this.commandCurrent.textNode.innerHTML);
      this.newPrompt();
    }
  }, {
    key: 'removeCursor',
    value: function removeCursor(command) {
      if (command) {
        command.node.removeChild(this.cursorNode);
      }
    }
  }, {
    key: 'addCursor',
    value: function addCursor(command) {
      if (!this.cursorNode) {
        this.cursorNode = document.createElement('div');
        this.cursorNode.classList.add('cursor');
      }
      command.node.appendChild(this.cursorNode);
    }
  }, {
    key: 'logCommand',
    value: function logCommand(command) {
      if (this.commandCurrent && this.commandCurrent.textNode.innerHTML.length > 0) {
        if (!this.commandHistory) {
          this.commandHistory = [command];
        } else {
          this.commandHistory.push(command);
        }
      }
    }
  }]);

  return CommandFactory;
}();