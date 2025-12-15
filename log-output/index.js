"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
function generateRandomString() {
    var randomString = (0, uuid_1.v4)();
    setInterval(function () {
        console.log(randomString);
    }, 5000);
}
generateRandomString();
