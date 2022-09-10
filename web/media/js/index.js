import { Router } from './helper/Router.js';

let snippetsPath = "media/snippets/";
let router = new Router(snippetsPath);

router.readFile("_contact.html", function (data) {
    router.switchContent(data);
});

