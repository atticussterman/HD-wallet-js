var bundle = require('./util').bundle
var buildDir = require('./util').buildDir

process.env.LANGUAGE = process.env.LANGUAGE || 'en'

function scripts(callback) {
    bundle('./app/application.js', buildDir('/assets/js/application-') + process.env.LANGUAGE + '.js', callback)
}

module.exports = scripts
