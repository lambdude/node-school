var args = process.argv;
args.shift();
args.shift();
var sum = args.reduce((accumulator, currentValue) =>
    Number(accumulator) + Number(currentValue));
console.log(sum);
