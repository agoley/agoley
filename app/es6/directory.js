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

        return allDirectoriesUp.join('/');
    }
}