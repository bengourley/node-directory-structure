module.exports = directories

var async = require('async')
  , mkdirp = require('mkdirp')
  , join = require('path').join

function directories(root, dirs, cb) {
  async.forEach(dirs, function (d, callback) {
    mkdirp(join(root, d), callback)
  }, cb)
}