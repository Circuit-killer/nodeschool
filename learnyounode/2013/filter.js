module.exports = function (dir, filter, callback) {
  var fs = require('fs')
  var re = new RegExp('\\.' + filter + '$')


  fs.readdir(dir, function (err, files) {
    if (err) 
      return callback(err)
    files = files.filter(function (thing) {
      return re.test(thing)
    })
    //console.log(files)
    callback(null, files)
  })
}
