import { Http } from './http';
import { forkJoin } from 'rxjs';

export class CommandFactory {
  promptNodeTemplate;

  constructor() {
    this.http = new Http();
    this.initPrompt();
  }

  initPrompt(command) {
    this.promptNodeTemplate = document.createElement('div');
    this.promptNodeTemplate.classList.add('prompt');

    forkJoin([
      this.http.get('https://ipinfo.io/?callback=', null, true),
      this.http.get('https://uzby.com/api.php?min=3&max=8', null, true)
    ]).subscribe(data => {
      this.promptNodeTemplate.textContent = this.getUserAndHost(data) + ' ~> ';
      const promptNode = this.promptNodeTemplate.cloneNode(true);
      this.newPrompt(promptNode);
    });
  }

  getUserAndHost(data) {
    const ipinfo = JSON.parse(data[0]);
    return data[1] + '@' + ipinfo.ip;
  }

  newPrompt(promptNode) {
    document.getElementById('commandLog').appendChild(promptNode);
  }
}
