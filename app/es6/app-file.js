export class AppFile {
    contentNode;
    directory;
    name;

    constructor (contentNode, directory, name, link) {
        this.contentNode = contentNode;
        this.directory = directory;
        this.name = name;
        this.link = link;
    }
}