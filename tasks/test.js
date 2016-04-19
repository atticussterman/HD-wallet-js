var glob = require('glob')
var bundle = require('./util').bundle
var buildDir = require('./util').buildDir

function test(callback) {
    bundle(glob.sync("./app/@(widgets|lib)/*/test/*"), buildDir('/assets/js/tests/index.js'), callback)
}

module.exports = test
