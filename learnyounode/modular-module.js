const fs = require('fs')
const path = require('path')

module.exports = function(dirname, ext, callback) {
  var extension = "." + ext;
  fs.readdir(dirname, function(err, files) {
    if (err) {
      callback(err, null);
    }
    else {
      result = [];
      files.forEach(function(entry) {
        if (path.extname(entry) == extension) {
          result.push(entry);
        }
      });
      callback(null, result);
    }
  });

};

// module.exports = function(dir, ext, callback) {
//     var extension = '.' + ext;
//     fs.readdir(dir, function(error, files) {
//         if(error) return callback(error, null)
//         var filteredFiles = files.filter(function(file) {
//             return path.extname(file) === extension
//         })
//         callback(null, filteredFiles)
//     })
// }
