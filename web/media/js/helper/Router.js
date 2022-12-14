export class Router {

    constructor(snippetsPath) {
        this.snippetsPath = snippetsPath;
        this.isLoading = false;
    }

    readFile(file, cb) {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", this.snippetsPath + file, false);
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status == 0) {
                    var allText = rawFile.responseText;
                    cb(allText);
                }
            }
        }
        rawFile.send();
    }

    toggleLoading() {
        let node = document.querySelector('.loader');
        if (!node) {
            throw new Error("no loader found on website.");
        }
        if (this.isLoading) {
            // magic to show loading animation
            node.style.display = "none";
        } else {
            // magic to remove loading animation
            node.style.display = "block";
        }

        this.isLoading = !this.isLoading;
    }

    switchContent(newContent) {
        this.toggleLoading();
        setTimeout(() => {
            document.querySelector('main').innerHTML = newContent;
            this.toggleLoading();
        }, 1000 * 3);

    }
}
