var gulp = require('gulp');

var G = require('gulp-load-plugins')({lazy:true});

//var gulpConfig = require('./../gulp.config')();
var gulpUtils = require('./../gulp.utils.js')();

gulp.task('cleanPublicBower', function(){
    return gulp
        .src(gulpUtils.config.publicBowerLoc, {read: false})
        .pipe(G.clean());
});

gulp.task('copyJQuery', function(){
    gulpUtils.log('Copy jquery from bower_components to public/bower');
    return gulpUtils.copyFiles(gulpUtils.config.bower.jquery.source, gulpUtils.config.bower.jquery.dest);
});

gulp.task('copyBootstrap', function(){
    gulpUtils.log('Copy bootstrap from bower_components to public/bower');
    return gulpUtils.copyFiles(gulpUtils.config.bower.bootstrap.source, gulpUtils.config.bower.bootstrap.dest);
});

gulp.task('copyFontawesomeCSS', function(){
    gulpUtils.log('Copy fontawesome from bower_components to public/bower');
    return gulpUtils.copyFiles(
        gulpUtils.config.bower.fontawesomeCSS.source,
        gulpUtils.config.bower.fontawesomeCSS.dest
    );
});
gulp.task('copyFontawesomeFONTS', function(){
    gulpUtils.log('Copy fontawesome from bower_components to public/bower');
    return gulpUtils.copyFiles(
        gulpUtils.config.bower.fontawesomeFONTS.source,
        gulpUtils.config.bower.fontawesomeFONTS.dest
    );
});

gulp.task('copyToastr', function(){
    gulpUtils.log('Copy toastr from bower_components to public/bower');
    return gulpUtils.copyFiles(gulpUtils.config.bower.toastr.source, gulpUtils.config.bower.toastr.dest);
});

gulp.task('copyAngularCore', function(){
    gulpUtils.log('Copy angular from bower_components to public/bower');
    return gulpUtils.copyFiles(gulpUtils.config.bower.angularCore.source, gulpUtils.config.bower.angularCore.dest);
});
