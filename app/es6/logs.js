export class Logs {
    constructor() {}

    displayBackPainLog() {
        const logRef = document.createElement("div");
        logRef.classList.add("log-body");
        const logHeaderRef = document.createElement("h2");
        logHeaderRef.innerHTML = "Surviving with Lower Back Pain, The Complete Guide for Everyone.";
        const uploadedOnDivDivRef = document.createElement("div");
        uploadedOnDivDivRef.innerHTML = "May 22, 2019";

        const fistParagraphRef = document.createElement("p");
        fistParagraphRef.innerHTML = "Greatest blog on freeing yourself from back pain coming here."

        logRef.appendChild(logHeaderRef);
        logRef.appendChild(uploadedOnDivDivRef);
        logRef.appendChild(fistParagraphRef);

        document.getElementById("DomHook").appendChild(logRef);
    }
}