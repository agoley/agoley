'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CommandFactory = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _http = require('./http');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommandFactory = exports.CommandFactory = function () {
    function CommandFactory() {
        _classCallCheck(this, CommandFactory);

        this.http = new _http.Http();
    }

    _createClass(CommandFactory, [{
        key: 'buildCommandNode',
        value: function buildCommandNode(command) {
            var commandNode = document.createElement('div');
            commandNode.classList.add('command');

            var prePromptNode = document.createElement('div');
            prePromptNode.classList.add('pre-prompt');

            var prePromptUserHostNode = document.createElement('div');
            prePromptUserHostNode.classList.add('pre-prompt-user-host');

            // // @ts-ignore
            // app.http.get(
            //   'https://ipinfo.io/?callback=',
            //   response => {
            //     console.log(response);
            //   },
            //   null,
            //   true
            // );

            // @ts-ignore
            // app.http
            //   .get('https://ipinfo.io/?callback=', null, true)
            //   .then(res => console.log(res));

            this.http.get('https://ipinfo.io/?callback=', null, true).subscribe(function (data) {
                return console.log(data);
            });

            // // @ts-ignore
            // app.http.get(
            //   'https://uzby.com/api.php?min=3&max=8',
            //   response => {
            //     console.log(response);
            //   },
            //   null,
            //   true
            // );
        }
    }]);

    return CommandFactory;
}();