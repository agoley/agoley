export class Directory {
  children;
  parent;
  name;
  isDirectory;

  constructor(name, parent, children) {
    this.name = name;
    this.parent = parent;
    this.children = children;
    this.isDirectory = true;
  }

  getPathFromRoot() {
    let allDirectoriesUp = [];

    let curr = this;
    while (curr) {
      allDirectoriesUp.unshift(curr.name);
      curr = curr.parent;
    }

    if (allDirectoriesUp.length === 0) {
        return '/';
    }

    return allDirectoriesUp.join("/");
  }

  getChildByName(name) {
    let child;
    this.children.forEach(element => {
      if (element.name === name || './' + element.name === name) {
        child = element;
      }
    });
    return child;
  }
}
