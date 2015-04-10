var gulp = require('gulp');

//var gulpConfig = require('./../gulp.config')();
var gulpUtils = require('./../gulp.utils.js')();

gulp.task('copyBootswatch', function(){
    var theme = 'paper';
    if(gulpUtils.args.theme){
        theme = gulpUtils.args.theme;
    }
    gulpUtils.log('Copy bootswatch from bower_components to public/bower theme: ' + theme);
    return gulpUtils.copyFiles(
        './bower_components/bootswatch/' + theme + '/*.css', gulpUtils.config.bower.bootstrap.dest + 'css/'
    );
});
