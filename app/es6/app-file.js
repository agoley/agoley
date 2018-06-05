export class AppFile {
    contentNode;
    directory;
    name;

    constructor (contentNode, directory, name) {
        this.contentNode = contentNode;
        this.directory = directory;
        this.name = name;
    }
}