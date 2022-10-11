import readline from 'readline';

process.argv.forEach(
    function ( val, index, array) {
        console.log(index + ": " + val);
    });

let a = readline.createInterface(process.stdin,process.stdout);

a.setPrompt("Hello:");

//#let f = a.prompt();

a.question(">> Who shot JR? ", function(answer) {
    console.log("You said: " + answer);
    a.close();
});


