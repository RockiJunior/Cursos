const commands = require('./commands/index.js');
const done = function(output) {
    process.stdout.write(output);
    process.stdout.write("prompt > ");
};

// Output un prompt
process.stdout.write('prompt > ');
// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on('data', function(data) {
    var args = data.toString().trim().split(' '); // remueve la nueva línea
    var cmd = args.shift();
    if (commands.hasOwnProperty(cmd)) {
        commands[cmd](args, done);
    } else {
        process.stdout.write(`${cmd} command not found`)
    };
    // if (cmd === 'date') {
    //     process.stdout.write(Date());
    // } else if (cmd === 'pwd') {
    //     process.stdout.write(process.cwd())
    // }
    //   process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ')
});