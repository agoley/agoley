export class Bin {
  commands;

  constructor() {
    this.commands = [
      { name: 'Ask-Alex', fn: this.askAlex },
      { name: 'clear', fn: this.clear }
    ];
  }

  invoke(commandStr) {
    if (!commandStr || commandStr.length === 0) {
      return;
    }

    const commandArr = commandStr.split(' ');
    const name = commandArr[0];

    const command = this.commands.filter(c => {
      return c.name === name;
    });
    if (command.length > 0) {
      command[0].fn();
    } else {
      // TODO: handle unkown input.
      console.log('Unknown command');

      const unknownNode = document.createElement('p');
      unknownNode.innerText = "Unknown command, try Ask-Alex for help."

      document.getElementById('commandLog').appendChild(unknownNode);
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

  clear() {
    document.getElementById('commandLog').innerHTML = '';
  }
}
