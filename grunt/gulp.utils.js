var gulp = require('gulp');
var args = require('yargs').argv;
var util = require('gulp-util');

var gulpConfig = require('./gulp.config')();

module.exports = function(){
    var gulpUtils = {
        config: gulpConfig,
        args: args,
        log: function(msg){
            if(typeof(msg) === 'object'){
                for(var item in msg){
                    if(msg.hasOwnProperty(item)) {
                        util.log(util.colors.blue(msg[item]));
                    }
                }
            }
            else {
                util.log(util.colors.yellow(msg));
            }
        },
        copyFiles: function(source, dest){
            if(args.verbose) {
                gulpUtils.log('Copying ' + source  + ' to ' + dest);
            }
            return gulp
                .src(source)
                .pipe(gulp.dest(dest));
        }
    };
    return gulpUtils;
};
