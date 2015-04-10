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

gulp.task('copyFromBower', function(){
    log('Copy static assets from bower_components to public/bower');
    return gulp
        .src(gulpConfig.bower.jquery.source)
        .pipe(gulp.dest(gulpConfig.bower.jquery.dest));
});

gulp.task('copyJQuery', function(){
    log('Copy jquery from bower_components to public/bower');
    return gulp
        .src(gulpConfig.bower.jquery.source)
        .pipe(gulp.dest(gulpConfig.bower.jquery.dest));
});
gulp.task('copyJQuery1', function(){
    log('Copy jquery from bower_components to public/bower');
    return copyFiles(gulpConfig.bower.jquery.source, gulpConfig.bower.jquery.dest);
});

gulp.task('copyBootstrap', function(){
    log('Copy bootstrap from bower_components to public/bower');
    return gulp
        .src(gulpConfig.bower.bootstrap.source)
        .pipe(gulp.dest(gulpConfig.bower.bootstrap.dest));
});

gulp.task('copyBootswatch', function(){
    log('Copy bootswatch from bower_components to public/bower');
    return gulp
        .src(gulpConfig.bower.bootstrap.source)
        .pipe(gulp.dest(gulpConfig.bower.bootstrap.dest));
});

gulp.task('copyFontawesome', function(){
    log('Copy fontawesome from bower_components to public/bower');
    return gulp
        .src(gulpConfig.bower.fontawesome.source)
        .pipe(gulp.dest(gulpConfig.bower.fontawesome.dest));
});

gulp.task('copyToastr', function(){
    log('Copy toastr from bower_components to public/bower');
    return gulp
        .src(gulpConfig.bower.toastr.source)
        .pipe(gulp.dest(gulpConfig.bower.toastr.dest));
});

///// Supporting Functions
function copyFiles(source, dest){
    if(args.verbose) {
        log('Copying ' + source  + ' to ' + dest);
    }
    return gulp
        .src(source)
        .pipe(gulp.dest(dest));
}

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
