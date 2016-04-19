var async = require('async')
var bundle = require('./util').bundle
var buildDir = require('./util').buildDir

process.env.LANGUAGE = process.env.LANGUAGE || 'en'

function loader(callback) {
  async.parallel([
    index,
    nope
  ], callback)
}

function index(callback) {
    bundle('./app/loader/index.js', buildDir('/assets/js/loader.js'), callback)
}

function nope(callback) {
    bundle('./app/loader/nope.js', buildDir('/assets/js/nope-') + process.env.LANGUAGE + '.js', callback)
}

module.exports = {
  loader: loader,
  index: index,
  nope: nope
}
