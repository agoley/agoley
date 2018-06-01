"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Command = exports.Command = function Command(node, textNode) {
  _classCallCheck(this, Command);

  this.node = node;
  this.textNode = textNode;
};