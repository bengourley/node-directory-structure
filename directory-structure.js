module.exports = directories

var async = require('async')
  , mkdirp = require('mkdirp')
  , join = require('path').join
  , relative = require('path').relative
  , Emitter = require('events').EventEmitter

function directories(root, dirs, cb) {

  var emitter = new Emitter()

  process.nextTick(function () {
    async.forEach(dirs, function (d, callback) {
      var path = join(root, d)
      emitter.emit('log', 'Creating ' + relative(process.cwd(), path), 'debug')
      mkdirp(path, callback)
    }, cb)
  })

  return emitter

}