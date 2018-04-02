const modularModule = require('./modular-module.js')

const dir = process.argv[2]
const ext = process.argv[3]

modularModule(dir, ext, function(error, files) {
    files.forEach(function(file) {
        console.log(file)
    })
})
