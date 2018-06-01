import { Http } from './http';

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

    // // @ts-ignore
    // app.http.get(
    //   'https://ipinfo.io/?callback=',
    //   response => {
    //     console.log(response);
    //   },
    //   null,
    //   true
    // );

    // @ts-ignore
    // app.http
    //   .get('https://ipinfo.io/?callback=', null, true)
    //   .then(res => console.log(res));

    this.http
      .get('https://ipinfo.io/?callback=', null, true)
      .subscribe(data => console.log(data));

    // // @ts-ignore
    // app.http.get(
    //   'https://uzby.com/api.php?min=3&max=8',
    //   response => {
    //     console.log(response);
    //   },
    //   null,
    //   true
    // );
  }
}
