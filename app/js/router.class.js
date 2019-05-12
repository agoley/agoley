'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Minimal Router that registers client routes and emits location changes.
 * Route specific handling is left to your implementation.
 */
var MinimalRouter = exports.MinimalRouter = function () {
  // Acts as a registry for actionable routes. Contains two fields path, and cb (callback).

  /**
   * Constructs a new router.
   * @param {*} e
   */
  function MinimalRouter() {
    _classCallCheck(this, MinimalRouter);

    this.routes = [];
  }

  /**
   * Add a new route.
   * @param {*} route
   */


  _createClass(MinimalRouter, [{
    key: 'addRoute',
    value: function addRoute(route) {

      if (!route.path) {

        console.error('MinimalRouter: Route missing path field');
      }

      if (!route.cb) {

        console.log('MinimalRouter: Route missing cb field');
      }
      this.routes.push(route);
    }

    /**
     * Remove a route.
     * @param {*} route
     */

  }, {
    key: 'removeRoute',
    value: function removeRoute(route) {}

    /**
     * Change the window location to the given route and emit the new location.
     * @param {*} path
     */

  }, {
    key: 'navigateByURL',
    value: function navigateByURL(path) {

      window.history.pushState({}, path, window.location.origin + path);
      this.handleRoute(path);
    }

    /**
     * return an array with dynamic portions of the route.
     * @returns {Array} params
     */

  }, {
    key: 'getParams',
    value: function getParams() {

      return [];
    }
  }, {
    key: 'getPath',
    value: function getPath() {

      return window.location.pathname;
    }
  }, {
    key: 'handleRoute',
    value: function handleRoute(path) {

      for (var i = 0; i < this.routes.length; i++) {

        if (this.routes[i].path === path) {

          this.routes[i].cb(path);
          return;
        }
      }

      console.error('MinimalRouter: No route found for path ' + path);
    }
  }, {
    key: 'sync',
    value: function sync() {
      var _this = this;

      console.log("sync");
      setTimeout(function () {
        _this.handleRoute(_this.getPath());
      }, 100);
    }
  }]);

  return MinimalRouter;
}();