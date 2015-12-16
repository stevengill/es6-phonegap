var browserify = require('browserify');
var fs = require('fs');

module.exports = function(context) {
    //grab Q from cordova modules
    var Q = context.requireCordovaModule('q');
    var deferral = new Q.defer();
	var outFile = fs.createWriteStream('www/js/bundle.js');
    browserify("src/app.js")
    .transform("babelify", {presets: ["es2015"]})
    .bundle()
    .pipe(outFile);

	outFile.on('finish', function() {
	    //bundle.js has been written
        deferral.resolve();
    })

    return deferral.promise;
}
