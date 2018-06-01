'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Http = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rxjs = require('rxjs');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Http = exports.Http = function () {
  function Http() {
    _classCallCheck(this, Http);
  }
  /**
   * @returns { Observable } - an observable from the http request.
   * @param {string} url - url to send the request.
   * @param {any} headers - optional: header object to use for th request.
   * @param {boolean} async - optional: flag to run asynchronous request. Defaults to false.
   */
  // get(url, next, headers, async) {


  _createClass(Http, [{
    key: 'get',
    value: function get(url, headers, async) {
      var promise = new Promise(function (resolve, reject) {
        var xhttp = new XMLHttpRequest();
        var isAsync = typeof async === 'undefined' ? false : async;
        xhttp.open('GET', url, isAsync);
        if (headers) {
          for (var key in headers) {
            if (headers.hasOwnProperty(key)) {
              xhttp.setRequestHeader(key, headers[key]);
            }
          }
        }
        xhttp.onload = function () {
          if (this.status >= 200 && this.status < 300) {
            resolve(xhttp.response);
          } else {
            reject({
              status: this.status,
              statusText: xhttp.statusText
            });
          }
        };
        xhttp.onerror = function () {
          reject({ status: this.status, statusText: xhttp.statusText });
        };
        xhttp.send();
      });

      // @ts-ignore
      return (0, _rxjs.from)(promise);
    }
  }]);

  return Http;
}();