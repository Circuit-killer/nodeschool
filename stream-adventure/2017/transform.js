let th = require('through2')

/* TODO: This didn't work and I think it's because I need to check the scoping of `let` */

// let write = (chunk, encoding, cb) => {
//   console.log(typeof th)
//   this.push(chunk.toString().toUpperCase())
//   cb()
// }

// let end = (cb) => {
//   cb()
// }

/* works */
function write (chunk, encoding, cb) {
  this.push(chunk.toString().toUpperCase())
  cb()
}

function end (cb) {
  cb()
}

process.stdin.pipe(th(write, end)).pipe(process.stdout)
