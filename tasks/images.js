var copy = require('./util').copy
var buildDir = require('./util').buildDir

function images(callback) {
    copy('./app/assets/img', buildDir('/assets/img'), callback)
}

module.exports = images
