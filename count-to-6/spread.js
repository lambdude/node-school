const userNums = process.argv.slice(2)
const min = Math.min(...userNums)
console.log(`The minimum of [${userNums}] is ${min}`)