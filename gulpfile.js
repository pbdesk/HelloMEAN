var gulp = require('gulp');
//var args = require('yargs').argv;

var G = require('gulp-load-plugins')({lazy:true});

var gulpConfig = require('./grunt/gulp.config.js')();
var gulpUtils = require('./grunt/gulp.utils.js')();

var requireDir;
requireDir = require('require-dir')('./grunt/tasks', {recurse: true});

/*
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var util = require('gulp-util');
var gulpprint = require('gulp-print');
var gulpif = require('gulp-if');
var clean = require('gulp-clean');
*/

gulp.task('hello-gulp', function() {
    console.log('Hello Gulp - from my first MEAN Project HelloMEAN');
});

gulp.task('vet', function() {
    gulpUtils.log('Analyzing source .JS files with JSCS & JSHint');
    return gulp
        .src(gulpConfig.alljs)
        .pipe(G.if(gulpUtils.args.verbose, G.print()))
        .pipe(G.jscs())
        .pipe(G.jshint())
        .pipe(G.jshint.reporter('jshint-stylish', {verbose:true}))
        .pipe(G.jshint.reporter('fail'));
});

gulp.task('copyFromBower', ['cleanPublicBower', 'copyJQuery', 'copyBootstrap',
    'copyFontawesomeCSS', 'copyFontawesomeFONTS', 'copyToastr']);

