"use strict";
exports.__esModule = true;
var readline_1 = require("readline");
process.argv.forEach(function (val, index, array) {
    console.log(index + ": " + val);
});
var a = (0, readline_1.createInterface)(process.stdin, process.stdout);
a.setPrompt("Hello:");
//#let f = a.prompt();
a.question(">> Who shot JR? ", function (answer) {
    console.log("You said: " + answer);
    a.close();
});
