"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bin = exports.Bin = function () {
  function Bin(app) {
    _classCallCheck(this, Bin);

    this.app = app;
    this.commands = [{ name: "Ask-Alex", fn: this.askAlex }, { name: "clear", fn: this.clear }, { name: "pwd", fn: this.pwd }, { name: "ls", fn: this.list }, { name: "cd", fn: this.changeDirectory }];
  }

  _createClass(Bin, [{
    key: "invoke",
    value: function invoke(commandStr) {
      if (!commandStr || commandStr.length === 0) {
        return;
      }

      var commandArr = commandStr.split(" ");
      var name = commandArr[0];

      var command = this.commands.filter(function (c) {
        return c.name === name;
      });
      if (command.length > 0) {
        command[0].fn.apply(this, commandArr.slice(1));
      } else {
        // TODO: handle unkown input.
        console.log("Unknown command");

        var unknownNode = document.createElement("p");
        unknownNode.innerText = "Unknown command, try Ask-Alex for help.";

        document.getElementById("commandLog").appendChild(unknownNode);
      }
    }
  }, {
    key: "askAlex",
    value: function askAlex(args) {
      // TODO: list some helpful stuff.
      console.log("you asked Alex");

      var askAlexNode = document.createElement("p");
      askAlexNode.classList.add("ask-alex");
      askAlexNode.innerHTML = "Hi, thanks for checking out my portfolio. It is currently being worked on and lots of cool stuff is coming. Check out its progress here: ";

      var repositorylinkNode = document.createElement("a");
      repositorylinkNode.setAttribute("href", "https://github.com/agoley/agoley");
      repositorylinkNode.innerText = "https://github.com/agoley/agoley";

      var linkedinNode = document.createElement("p");
      linkedinNode.innerText = "Connect with me on LinkedIn: ";

      var linkedinLinkNode = document.createElement("a");
      linkedinLinkNode.setAttribute("href", "https://www.linkedin.com/in/alex-goley-6230479b/");
      linkedinLinkNode.innerText = "https://www.linkedin.com/in/alex-goley-6230479b/";
      linkedinNode.appendChild(linkedinLinkNode);

      askAlexNode.appendChild(repositorylinkNode);
      askAlexNode.appendChild(linkedinNode);

      document.getElementById("commandLog").appendChild(askAlexNode);
    }
  }, {
    key: "clear",
    value: function clear(args) {
      document.getElementById("commandLog").innerHTML = "";
    }
  }, {
    key: "pwd",
    value: function pwd(args) {
      var pwdNode = document.createElement("p");
      pwdNode.innerText = this.app.workingDirectory.getPathFromRoot();
      document.getElementById("commandLog").appendChild(pwdNode);
    }
  }, {
    key: "list",
    value: function list(args) {
      var lsNode = document.createElement("div");
      lsNode.classList.add("ls-node");

      this.app.workingDirectory.children.forEach(function (i) {
        var node = document.createElement("div");
        console.log(i);
        if (i.isDirectory) {
          node.innerHTML = i.name + "/";
          node.classList.add("ls-item-node");
        } else {
          if (i.link) {
            node.innerHTML = "<a href='" + i.link + "'>" + i.name + "</a>";
            node.style.padding = "1em";
            node.style.display = "inline-block";
          } else {
            node.innerHTML = i.name;
            node.classList.add("ls-item-node");
          }
        }
        node.innerHTML;
        lsNode.appendChild(node);
      });

      document.getElementById("commandLog").appendChild(lsNode);
    }
  }, {
    key: "changeDirectory",
    value: function changeDirectory(args) {
      if (args === "..") {
        if (this.app.workingDirectory.parent) {
          this.app.workingDirectory = this.app.workingDirectory.parent;
        }
      }
      if (args === "~") {
        this.app.workingDirectory = this.app.homeDirectory;
      }

      var child = this.app.workingDirectory.getChildByName(args);
      if (child) {
        this.app.workingDirectory = child;
      }
    }
  }]);

  return Bin;
}();