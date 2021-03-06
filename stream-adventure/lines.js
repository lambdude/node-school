var split = require('split');
var through2 = require('through2');

var lineCount = 0;
var tr = through2(function (buf, _, next) {
    var line = buf.toString();
    this.push(lineCount % 2 === 0
        ? line.toLowerCase() + '\n'
        : line.toUpperCase() + '\n');
    lineCount++;
    next();
})

process.stdin
    .pipe(split())
    .pipe(tr)
    .pipe(process.stdout);