import { Http } from './http';
import { forkJoin } from 'rxjs';

export class CommandFactory {
  constructor() {
    this.http = new Http();
  }

  buildCommandNode(command) {
    let commandNode = document.createElement('div');
    commandNode.classList.add('command');

    let prePromptNode = document.createElement('div');
    prePromptNode.classList.add('pre-prompt');

    let prePromptUserHostNode = document.createElement('div');
    prePromptUserHostNode.classList.add('pre-prompt-user-host');

    forkJoin([
      this.http.get('https://ipinfo.io/?callback=', null, true),
      this.http.get('https://uzby.com/api.php?min=3&max=8', null, true)
    ]).subscribe(data => {
      console.log(JSON.parse(data[0]));
      console.log(data[1]);
    });
  }
}
