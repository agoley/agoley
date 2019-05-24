export class Logs {
  constructor() {}

  displayBackPainLog() {
    const logRef = document.createElement("div");
    logRef.classList.add("log-body");
    const logHeaderRef = document.createElement("h2");
    logHeaderRef.innerHTML =
      "Surviving with Lower Back Pain, The Complete Guide for Everyone.";
    const uploadedOnDivDivRef = document.createElement("div");
    uploadedOnDivDivRef.innerHTML = "May 22, 2019";

    const fistParagraphRef = document.createElement("p");
    fistParagraphRef.innerHTML =
      "Greatest blog on freeing yourself from back pain coming here.";

    const connectNode = document.createElement("p");
    connectNode.classList.add("ask-alex");
    connectNode.innerHTML =
      "Thanks for reading. For help with this site or to check out its progress go here: ";

    const repositorylinkNode = document.createElement("a");
    repositorylinkNode.setAttribute("href", "https://github.com/agoley/agoley");
    repositorylinkNode.innerText = "https://github.com/agoley/agoley";

    const linkedinNode = document.createElement("p");
    linkedinNode.innerText = "Connect with me on LinkedIn: ";

    const linkedinLinkNode = document.createElement("a");
    linkedinLinkNode.setAttribute(
      "href",
      "https://www.linkedin.com/in/alex-goley-6230479b/"
    );
    linkedinLinkNode.innerText =
      "https://www.linkedin.com/in/alex-goley-6230479b/";
    linkedinNode.appendChild(linkedinLinkNode);

    connectNode.appendChild(repositorylinkNode);
    connectNode.appendChild(linkedinNode);

    logRef.appendChild(logHeaderRef);
    logRef.appendChild(uploadedOnDivDivRef);
    logRef.appendChild(fistParagraphRef);
    logRef.appendChild(connectNode);

    document.getElementById("DomHook").appendChild(logRef);
  }
}
