import { Http } from './http';
import { forkJoin, interval } from 'rxjs';

export class CommandFactory {
  promptNodeTemplate;
  commandHistory;
  commandCurrent;
  cursorNode;

  constructor() {
    this.http = new Http();
    this.initPrompt();

    document.onkeyup = this.onInput.bind(this);
  }

  initPrompt(command) {
    forkJoin([
      this.http.get('https://ipinfo.io/?callback=', null, true),
      this.http.get('https://uzby.com/api.php?min=3&max=8', null, true)
    ]).subscribe(data => {
      this.constructPromptNodeTemplate(data);
      this.newPrompt();
    });
  }

  constructPromptNodeTemplate(data) {
    this.promptNodeTemplate = document.createElement('div');
    this.promptNodeTemplate.classList.add('prompt');

    this.promptNodeTemplate.textContent = this.getUserAndHost(data) + ' ~> ';
  }

  getUserAndHost(data) {
    const ipinfo = JSON.parse(data[0]);
    return data[1] + '@' + ipinfo.ip;
  }

  onInput(event) {
    if (event.code === 'Enter') {
      this.proccessCommand();
    }
  }

  newPrompt() {
    this.removeCursor(this.commandCurrent);
    const promptNode = this.promptNodeTemplate.cloneNode(true);
    document.getElementById('commandLog').appendChild(promptNode);
    this.commandCurrent = promptNode;
    this.addCursor(this.commandCurrent);
  }

  proccessCommand() {
    this.newPrompt();
  }

  removeCursor(node) {
    if (node) {
      node.removeChild(this.cursorNode);
    }
  }

  addCursor(node) {
    if (!this.cursorNode) {
      this.cursorNode = document.createElement('div');
      this.cursorNode.classList.add('cursor');
    }
    node.appendChild(this.cursorNode);
  }

  logCommand(command) {
    if (!this.commandHistory) {
      this.commandHistory = [command];
    } else {
      this.commandHistory.push(command);
    }
  }
}
