"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logs = exports.Logs = function () {
    function Logs() {
        _classCallCheck(this, Logs);
    }

    _createClass(Logs, [{
        key: "displayBackPainLog",
        value: function displayBackPainLog() {
            var logRef = document.createElement("div");
            logRef.classList.add("log-body");
            var logHeaderRef = document.createElement("h2");
            logHeaderRef.innerHTML = "Surviving with Lower Back Pain, The Complete Guide for Everyone.";
            var uploadedOnDivDivRef = document.createElement("div");
            uploadedOnDivDivRef.innerHTML = "May 22, 2019";

            var fistParagraphRef = document.createElement("p");
            fistParagraphRef.innerHTML = "Greatest blog on freeing yourself from back pain coming here.";

            logRef.appendChild(logHeaderRef);
            logRef.appendChild(uploadedOnDivDivRef);
            logRef.appendChild(fistParagraphRef);

            document.getElementById("DomHook").appendChild(logRef);
        }
    }]);

    return Logs;
}();