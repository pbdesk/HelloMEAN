var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var util = require('gulp-util');

gulp.task('hello-gulp', function() {
    console.log('Hello Gulp - from my first MEAN Project HelloMEAN');
});

gulp.task('vet', function() {
    log('Analyzing source .JS files with JSCS & JSHint');
    return gulp
        .src([
            './*.js',
            './server/**/*.js'
        ])
        //.pipe(jscs())
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {verbose:true}))
        .pipe(jshint.reporter('fail'));
});

///// Supporting Functions
function log(msg) {
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

}