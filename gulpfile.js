var gulp = require('gulp');
var args = require('yargs').argv;

var G = require('gulp-load-plugins')({lazy:true});

var gulpConfig = require('./gulp.config')();

/*var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var util = require('gulp-util');
var gulpprint = require('gulp-print');
var gulpif = require('gulp-if');*/

gulp.task('hello-gulp', function() {
    console.log('Hello Gulp - from my first MEAN Project HelloMEAN');
});

gulp.task('vet', function() {
    log('Analyzing source .JS files with JSCS & JSHint');
    return gulp
        .src(gulpConfig.alljs)
        .pipe(G.if(args.verbose, G.print()))
        .pipe(G.jscs())
        .pipe(G.jshint())
        .pipe(G.jshint.reporter('jshint-stylish', {verbose:true}))
        .pipe(G.jshint.reporter('fail'));
});

///// Supporting Functions
function log(msg) {
    if(typeof(msg) === 'object'){
        for(var item in msg){
            if(msg.hasOwnProperty(item)) {
                G.util.log(G.util.colors.blue(msg[item]));
            }
        }
    }
    else {
        G.util.log(G.util.colors.yellow(msg));
    }

}
