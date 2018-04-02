const inputs = process.argv.slice(2)
const result = inputs.map(arg => arg.charAt(0))
                    .reduce((str, char) => str + char)

console.log(`[${inputs}] becomes "${result}"`)