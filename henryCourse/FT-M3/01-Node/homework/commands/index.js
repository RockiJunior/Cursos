const fs = require('fs');
const request = require('request');



module.exports = {
    date: function(args, done) {
        // process.stdout.write(Date());
        done(Date());
    },
    pwd: function(args, done) {
        // process.stdout.write(process.cwd())
        done(process.cwd());
    },
    ls: function(args, done) {
        let strFiles = '';
        fs.readdir('.', function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
                // process.stdout.write(file.toString() + "\n");
                strFiles = strFiles + file + '\n';
            })
            done(strFiles)
                // process.stdout.write("prompt > ");
        });
    },
    echo: function(args, done) {
        // process.stdout.write(args.join(' '))
        done(args.join(' '));
    },
    cat: function(args, done) {
        fs.readFile(args[0], function(err, data) {
            if (err) throw err;
            done(data)
                // process.stdout.write(data);
                // process.stdout.write("prompt > ");
        })
    },
    head: function(args, done) {
        fs.readFile(args[0], 'utf-8', function(err, data) {
            if (err) throw err;
            const firstLines = data.split('\n').slice(0, 10).join('\n');
            done(firstLines);
            // process.stdout.write(firstLines.join('\n'));
            // process.stdout.write("prompt > ");
        })
    },
    tail: function(args, done) {
        fs.readFile(args[0], 'utf-8', function(err, data) {
            if (err) throw err;
            const lastLines = data.split('\n').slice(-10).join('\n');
            done(lastLines);
            // process.stdout.write(lastLines.join('\n'));
            // process.stdout.write("prompt > ");
        })
    },
    curl: function(args, done) {
        request(args[0], function(err, response, body) {
            if (err) throw err;
            done(body)
                // process.stdout.write(body);
                // process.stdout.write("prompt > ");
        })
    }

}