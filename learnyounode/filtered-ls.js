const fs = require('fs')
const path = require('path')

const dir = process.argv[2]
const ext = '.' + process.argv[3]

fs.readdir(dir, function(error, files) {
    if(error) return console.log(error)
    files.filter(function(file) {
        return path.extname(file) === ext
    }).forEach(function(file) {
        console.log(file)
    })
})
