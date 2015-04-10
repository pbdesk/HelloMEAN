var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

gulp.task('hello-gulp', function() {
    console.log('Hello Gulp - from my first MEAN Project HelloMEAN');
});

gulp.task('vet', function() {
    return gulp
        .src([
            './*.js',
            './server/**/*.js'
        ])
        //.pipe(jscs())
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {verbose:true}));

});
