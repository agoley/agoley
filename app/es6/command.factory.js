import { Http } from "./http";
import { forkJoin, interval } from "rxjs";

import { Command } from "./command";
import { Bin } from "./bin";

export class CommandFactory {
  promptNodeTemplate;
  commandHistory;
  commandCurrent;
  cursorNode;
  commandHistoryIndex;
  app;

  constructor(app) {
    this.app = app;
    this.http = new Http();
    this.bin = new Bin(app);

    this.initPrompt();

    document.onkeyup = this.onInput.bind(this);
    window.addEventListener("keydown", this.onkeydown, false);

    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {

      // This is a mobile device.
      prompt();
    }
  }

  initPrompt(command) {
    console.log("init");
    forkJoin([
      this.http.get("https://api.ipify.org?format=json", null, true),
      this.http.get(
        "https://cors.io/?https://uzby.com/api.php?min=3&max=8",
        null,
        true
      )
    ]).subscribe(data => {
      this.constructPromptNodeTemplate(data);
      this.newPrompt();
    });
  }

  constructPromptNodeTemplate(data) {
    this.promptNodeTemplate = document.createElement("div");
    this.promptNodeTemplate.classList.add("prompt");

    this.promptNodeTemplate.textContent = this.getUserAndHost(data) + " ~> ";
  }

  getUserAndHost(data) {
    const ipinfo = JSON.parse(data[0]);
    return data[1] + "@" + ipinfo.ip;
  }

  onkeydown(event) {
    if (event.code === "ArrowUp" || event.code === "ArrowDown") {
      event.preventDefault();
    }
  }

  onInput(event) {
    if (event.code === "ArrowUp") {
      event.preventDefault();
      if (!this.commandHistory || this.commandHistory.length === 0) {
        return;
      }

      if (typeof this.commandHistoryIndex !== "number") {
        this.commandHistoryIndex = this.commandHistory.length - 1;
      } else if (this.commandHistoryIndex > 0) {
        this.commandHistoryIndex--;
      }

      if (
        this.commandHistoryIndex >= 0 &&
        this.commandHistory[this.commandHistoryIndex]
      ) {
        let cmd = this.commandHistory[this.commandHistoryIndex].textNode
          .innerHTML;
        this.commandCurrent.textNode.innerHTML = cmd;
      }
    }

    if (event.code === "ArrowDown") {
      event.preventDefault();
      if (!this.commandHistory || this.commandHistory.length === 0) {
        return;
      }

      if (typeof this.commandHistoryIndex !== "number") {
        this.commandHistoryIndex = 0;
      } else if (this.commandHistoryIndex < this.commandHistory.length) {
        this.commandHistoryIndex++;
      }

      if (
        this.commandHistoryIndex >= 0 &&
        this.commandHistory[this.commandHistoryIndex]
      ) {
        let cmd = this.commandHistory[this.commandHistoryIndex].textNode
          .innerHTML;
        this.commandCurrent.textNode.innerHTML = cmd;
      }
    }

    if (event.code === "Backspace") {
      this.onBackspace();
    }
    if (event.code === "Enter") {
      this.proccessCommand();
    } else if (this.isValidCommandInput(event)) {
      this.commandCurrent.textNode.innerHTML =
        this.commandCurrent.textNode.innerHTML + event.key;
    }
  }

  isValidCommandInput(event) {
    return event.key.length === 1;
  }

  onBackspace() {
    if (this.commandCurrent.textNode.innerHTML.length > 0) {
      this.commandCurrent.textNode.innerHTML = this.commandCurrent.textNode.innerHTML.substring(
        0,
        this.commandCurrent.textNode.innerHTML.length - 1
      );
    }
  }

  newPrompt() {
    this.commandHistoryIndex = null;
    this.logCommand(this.commandCurrent);
    this.removeCursor(this.commandCurrent);
    this.createNewCommand();
    this.addCursor(this.commandCurrent);
  }

  createNewCommand() {
    const promptNode = this.promptNodeTemplate.cloneNode(true);

    const commandTextNode = document.createElement("span");
    commandTextNode.classList.add("command-text");
    promptNode.appendChild(commandTextNode);
    this.commandCurrent = new Command(promptNode, commandTextNode);

    document.getElementById("commandLog").appendChild(promptNode);
    promptNode.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "end"
    });
  }

  proccessCommand() {
    this.bin.invoke(this.commandCurrent.textNode.innerHTML);
    this.newPrompt();
  }

  removeCursor(command) {
    if (command) {
      command.node.removeChild(this.cursorNode);
    }
  }

  addCursor(command) {
    if (!this.cursorNode) {
      this.cursorNode = document.createElement("div");
      this.cursorNode.classList.add("cursor");
    }
    command.node.appendChild(this.cursorNode);
  }

  logCommand(command) {
    if (
      this.commandCurrent &&
      this.commandCurrent.textNode.innerHTML.length > 0
    ) {
      if (!this.commandHistory) {
        this.commandHistory = [command];
      } else {
        this.commandHistory.push(command);
      }
    }
  }
}
