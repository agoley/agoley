"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Directory = exports.Directory = function () {
  function Directory(name, parent, children) {
    _classCallCheck(this, Directory);

    this.name = name;
    this.parent = parent;
    this.children = children;
    this.isDirectory = true;
  }

  _createClass(Directory, [{
    key: "getPathFromRoot",
    value: function getPathFromRoot() {
      var allDirectoriesUp = [];

      var curr = this;
      while (curr) {
        allDirectoriesUp.unshift(curr.name);
        curr = curr.parent;
      }

      return allDirectoriesUp.join("/");
    }
  }, {
    key: "getChildByName",
    value: function getChildByName(name) {
      var child = void 0;
      this.children.forEach(function (element) {
        if (element.name === name || './' + element.name === name) {
          child = element;
        }
      });
      return child;
    }
  }]);

  return Directory;
}();