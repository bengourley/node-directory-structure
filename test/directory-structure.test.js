var mkdirs = require('../')
  , assert = require('assert')
  , join = require('path').join
  , rimraf = require('rimraf')
  , fs = require('fs')
  , tmpname = 'tmp'

beforeEach(function (done) {
  rimraf(join(__dirname, 'tmp'), function () {
    fs.mkdir(join(__dirname, 'tmp'), done)
  })
})

after(function (done) {
  rimraf(join(__dirname, 'tmp'), done)
})

describe('directories()', function () {

  it('should create a directory', function (done) {
    mkdirs(join(__dirname, 'tmp'), ['dir1', 'dir2'], function (err) {
      assert(!err)
      fs.exists(join(__dirname, 'tmp', 'dir1'), function (exists) {
        assert(exists)
        done()
      })
    })
  })

  it('should create multiple directories', function (done) {
    mkdirs(join(__dirname, 'tmp'), ['dir1', 'dir2'], function (err) {
      assert(!err)
      fs.exists(join(__dirname, 'tmp', 'dir1'), function (exists) {
        assert(exists)
        complete()
      })
      fs.exists(join(__dirname, 'tmp', 'dir2'), function (exists) {
        assert(exists)
        complete()
      })
      var todo = 2
      function complete() {
        if (--todo === 0) done()
      }
    })
  })

  it('should create nested directories', function (done) {
    mkdirs(join(__dirname, 'tmp'), [join('dir1', 'dir2')], function (err) {
      assert(!err)
      fs.exists(join(__dirname, 'tmp', 'dir1'), function (exists) {
        assert(exists)
        complete()
      })
      fs.exists(join(__dirname, 'tmp', 'dir1', 'dir2'), function (exists) {
        assert(exists)
        complete()
      })
      var todo = 2
      function complete() {
        if (--todo === 0) done()
      }
    })
  })

})