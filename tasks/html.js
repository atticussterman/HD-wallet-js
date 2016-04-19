var fs = require('fs')
var copy = require('./util').copy
var isProduction = require('./util').isProduction
var buildDir = require('./util').buildDir

function html(callback) {
    var _callback = callback;
    callback = function(err) {
        if (err) return _callback(err);
        var MOUNT_POINT = process.env.MOUNT_POINT;
        if (!MOUNT_POINT) return _callback();
        var filename = buildDir('/index.html');
        fs.readFile(filename, { encoding: 'utf8' }, function(err, index){
            if(err) return _callback(err);

            var replacement = '<head><base href="' + MOUNT_POINT + '/">';
            fs.writeFile(filename, index.replace('<head>', replacement), _callback)
        })

    };
    var cb = isProduction() ? callback : injectLivereloadScript(callback)
    copy('./app/index.html', buildDir(), cb)
}

function injectLivereloadScript(callback) {
    return function(){
        var filename = buildDir('/index.html')
        fs.readFile(filename, { encoding: 'utf8' }, function(err, index){
            if(err) return callback(err);

            var replacement = '<script src="http://127.0.0.1:35729/livereload.js"></script>\n</body>'
            fs.writeFile(filename, index.replace('</body>', replacement), callback)
        })
    }
}

module.exports = html
