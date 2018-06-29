import { Http } from './http';
import { CommandFactory } from './command.factory';
import { Directory } from './directory';
import { AppFile } from './app-file';


const app = {};
// @ts-ignore
app.commandFactory = new CommandFactory();
const rootDirectory = new Directory('', null, []);
const homeDirectory = new Directory('home', rootDirectory, []);
app.homeDirectory = homeDirectory;
rootDirectory.children.push(homeDirectory);
const gamesDirectory = new Directory('games', homeDirectory, []);
homeDirectory.children.push(gamesDirectory);
const snakeFile = new AppFile(null, gamesDirectory, 'snake.sh')
gamesDirectory.children.push(snakeFile);
const pacmanFile = new AppFile(null, gamesDirectory, 'pacman.sh')
gamesDirectory.children.push(pacmanFile);
const leaderboardFile = new AppFile(null, gamesDirectory, 'leaderboard.txt');
app.workingDirectory = homeDirectory;
const blogDirectory = new Directory('logs', homeDirectory, []);
homeDirectory.children.push(blogDirectory);

window.app = app;