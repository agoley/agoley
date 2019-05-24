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
      logHeaderRef.innerHTML = "Surviving with Lower Back Pain, How to Treat Yourself Non Invasively.";
      var uploadedOnDivDivRef = document.createElement("div");
      uploadedOnDivDivRef.innerHTML = "May 22, 2019";

      var fistParagraphRef = document.createElement("p");
      fistParagraphRef.innerHTML = "Greatest blog on freeing yourself from back pain coming here.";

      var connectNode = document.createElement("p");
      connectNode.classList.add("ask-alex");
      connectNode.innerHTML = "Thanks for reading. For help with this site or to check out its progress go here: ";

      var repositorylinkNode = document.createElement("a");
      repositorylinkNode.setAttribute("href", "https://github.com/agoley/agoley");
      repositorylinkNode.innerText = "https://github.com/agoley/agoley";

      var linkedinNode = document.createElement("p");
      linkedinNode.innerText = "Connect with me on LinkedIn: ";

      var linkedinLinkNode = document.createElement("a");
      linkedinLinkNode.setAttribute("href", "https://www.linkedin.com/in/alex-goley-6230479b/");
      linkedinLinkNode.innerText = "https://www.linkedin.com/in/alex-goley-6230479b/";
      linkedinNode.appendChild(linkedinLinkNode);

      connectNode.appendChild(repositorylinkNode);
      connectNode.appendChild(linkedinNode);

      logRef.appendChild(logHeaderRef);
      logRef.appendChild(uploadedOnDivDivRef);
      logRef.appendChild(fistParagraphRef);
      logRef.appendChild(connectNode);

      document.getElementById("DomHook").appendChild(logRef);
    }
  }]);

  return Logs;
}();