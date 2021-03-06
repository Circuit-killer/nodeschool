function Spy (target, method) {
  // i.e.
  // var fn = console['log']
  var fn = target[method]

  // use an object so we can pass by reference, not value
  // i.e. we can return result, but update count from this scope

  // So the whole Spy class is in scope for the `this` as argument to fn.apply
  var result = {
    count: 0
  }

  var blah = {}
  blah.count = 0

  target[method] = function () { // execute this function and return
    console.log(blah.count++, result.count++)
    // return originalTargetObject.apply(Spy, args)
    return fn.apply(this, arguments)
  }
  return result // Return result so now `var spy` has the count property
                // which is incremented each time `console.error` is used
}

module.exports = Spy
