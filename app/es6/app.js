import { CommandFactory } from "./command.factory";
import { Directory } from "./directory";
import { AppFile } from "./app-file";
import { MinimalRouter } from "./router.class";
import { Logs } from "./logs";

class App {
  constructor() {
    this.router = new MinimalRouter();
    this.router.addRoute({ path: "/", cb: () => {} });
    this.router.addRoute({ path: "/surviving-back-pain", cb: onBackPainRoute });
    this.router.addRoute({ path: "/best-dev-life", cb: onBestDevRoute });
    this.router.addRoute({
      path: "/nike-invincible-flynit",
      cb: onNikeInvincibleRoute,
    });
    this.logs = new Logs();

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
    const survivingLowerBackPainFile = new AppFile(
      null,
      blogDirectory,
      "surviving_lower_back_pain_the_non_invasive_way.log",
      "/surviving-back-pain"
    );
    blogDirectory.children.push(survivingLowerBackPainFile);
    const bestDevLifeFile = new AppFile(
      null,
      blogDirectory,
      "how_to_live_your_best_dev_life.log",
      "/best-dev-life"
    );
    blogDirectory.children.push(bestDevLifeFile);
    const nikeInvincibleFile = new AppFile(
      null,
      blogDirectory,
      "nike-invincible-flynit-review.log",
      "/nike-invincible-flynit"
    );
    blogDirectory.children.push(nikeInvincibleFile);
    homeDirectory.children.push(blogDirectory);
  }

  initRoutes() {
    setTimeout(() => {
      this.router.sync();
    }, 500);
  }
}

const hideCommandLog = () => {
  document.getElementById("commandLog").style.display = "none";
  document.getElementById("welcomeParagraph").style.display = "none";
};

const hideAsciiMe = () => {
  document.getElementById("asciiMe").style.display = "none";
};

const onBackPainRoute = (path) => {
  hideAsciiMe();
  hideCommandLog();
  app.logs.displayBackPainLog();
};

const onBestDevRoute = (path) => {
  hideAsciiMe();
  hideCommandLog();
  app.logs.displayBestDevLifeLog();
};

const onNikeInvincibleRoute = (path) => {
  hideAsciiMe();
  hideCommandLog();
  app.logs.displayNikeInvincibleFlynitReviewLog();
};

const app = new App();
