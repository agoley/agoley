"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppFile = exports.AppFile = function AppFile(contentNode, directory, name) {
    _classCallCheck(this, AppFile);

    this.contentNode = contentNode;
    this.directory = directory;
    this.name = name;
};