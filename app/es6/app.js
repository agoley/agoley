import { CommandFactory } from "./command.factory";
import { Directory } from "./directory";
import { AppFile } from "./app-file";
import { MinimalRouter } from "./router.class";

class App {
  constructor() {
    this.router = new MinimalRouter();
    this.initRoutes();
    this.commandFactory = new CommandFactory(this);
    const rootDirectory = new Directory("", null, []);
    const homeDirectory = new Directory("home", rootDirectory, []);
    this.homeDirectory = homeDirectory;
    rootDirectory.children.push(homeDirectory);
    const gamesDirectory = new Directory("games", homeDirectory, []);
    homeDirectory.children.push(gamesDirectory);
    const snakeFile = new AppFile(null, gamesDirectory, "snake.sh");
    gamesDirectory.children.push(snakeFile);
    const pacmanFile = new AppFile(null, gamesDirectory, "pacman.sh");
    gamesDirectory.children.push(pacmanFile);
    const leaderboardFile = new AppFile(
      null,
      gamesDirectory,
      "leaderboard.txt"
    );
    this.workingDirectory = homeDirectory;
    const blogDirectory = new Directory("logs", homeDirectory, []);
    homeDirectory.children.push(blogDirectory);
  }

  initRoutes() {
    setTimeout(() => {
      this.router.sync();
    }, 500);
  }
}
const app = new App();
