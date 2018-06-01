export class Bin {
  commands;

  constructor() {
    this.commands = [{ name: 'Ask-Alex', fn: this.askAlex }];
  }

  invoke(commandStr) {
    const commandArr = commandStr.split(' ');
    const name = commandArr[0];

    const command = this.commands.filter(c => {
      return c.name === name;
    });
    if (command.length > 0) {
      command[0].fn();
    } else {
      // TODO: handle unkown input.
      console.log('Unkown command');
    }
  }

  askAlex() {
    // TODO: list some helpful stuff.
    console.log('you asked Alex');

    const askAlexNode = document.createElement('p');
    askAlexNode.classList.add('ask-alex');
    askAlexNode.innerHTML =
      'Hi, thanks for checking out my portfolio. It is currently being worked on and lots of cool stuff is coming. Check out its progress here: ';

    const repositorylinkNode = document.createElement('a');
    repositorylinkNode.setAttribute('href', 'https://github.com/agoley/agoley');
    repositorylinkNode.innerText = 'https://github.com/agoley/agoley';

    askAlexNode.appendChild(repositorylinkNode);

    document.getElementById('commandLog').appendChild(askAlexNode);
  }
}
