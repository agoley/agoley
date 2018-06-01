import { Observable } from 'rxjs';
import { from } from 'rxjs';

export class Http {
  constructor() {}
  /**
   * @returns { Observable } - an observable from the http request.
   * @param {string} url - url to send the request.
   * @param {any} headers - optional: header object to use for th request.
   * @param {boolean} async - optional: flag to run asynchronous request. Defaults to false.
   */
  // get(url, next, headers, async) {
  get(url, headers, async) {
    const promise = new Promise(function(resolve, reject) {
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
      xhttp.onload = function() {
        if (this.status >= 200 && this.status < 300) {
          resolve(xhttp.response);
        } else {
          reject({
            status: this.status,
            statusText: xhttp.statusText
          });
        }
      };
      xhttp.onerror = function() {
        reject({ status: this.status, statusText: xhttp.statusText });
      };
      xhttp.send();
    });

    // @ts-ignore
    return from(promise);
  }
}
