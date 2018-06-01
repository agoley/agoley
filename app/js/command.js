"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// @ts-ignore
var Command = function Command(directory, reference, state, value) {
  _classCallCheck(this, Command);

  this.directory = directory;
  this.reference = reference;
  this.state = state;
  this.value = value;
};

exports.default = Command;